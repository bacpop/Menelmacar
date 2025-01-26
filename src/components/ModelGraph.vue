<template>
  <div v-if="cy" class="flex flex-row justify-between">
    <Popover :open="paramsDropdownOpen">
      <PopoverTrigger as-child>
        <Button variant="outline" class="uppercase rounded-md bg-transparent border-white"
                @click="paramsDropdownOpen = !paramsDropdownOpen">
          Layout parameters
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom"
                      align="start"
                      :prioritize-position="true"
                      class="w-fit flex flex-col gap-1">
        <div class="flex flex-col gap-2 max-h-[350px] overflow-y-auto">
          <div v-for="parameter in Object.keys(layoutParameters)"
               class="flex flex-row w-[300px]">
            <label :for="`param_${parameter}`" class="inline-block w-11/12 whitespace-nowrap">
              {{ parameter }}:
            </label>
            <Input type="number"
                   :name="`param_${parameter}`"
                   :id="`param_${parameter}`"
                   :value="layoutParameters[parameter]"
                   @input="event => updateParam(parameter, Number(event.target.value))"
                   class="w-6/12" />
          </div>
        </div>
        <div class="flex flex-row justify-end mt-2 pt-4 gap-2 border-t">
          <Button variant="outline" @click="resetParams">
            Reset
          </Button>
          <Button @click="reload">
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>

    <Button variant="outline" class="uppercase rounded-md bg-transparent border-white" @click="downloadImage">
      <Download />
      Download image
    </Button>
  </div>

  <div class="bg-slate-dark rounded-md p-4 mt-8 flex flex-row flex-wrap gap-4">
    <p v-if="!modelLoaded & !noModelFound">Loading...</p>
    <div v-else-if="noModelFound">
      <h2>The JSON file for this model doesn't exist</h2>
    </div>
    <div id="graphHolder"></div>
  </div>
</template>

<script setup lang="ts">
import cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import { adjustStylesheet } from '../utils/stylesheet.ts'
import { onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Download } from 'lucide-vue-next'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

cytoscape.use(fcose)

const props = defineProps<{ modelReference: string }>()
const modelReference = ref(props.modelReference)

const paramsDropdownOpen = ref(false)

const modelLoaded = ref(false)
const noModelFound = ref(false)
const cy = ref(null)
const layout = ref({})
const layoutParameters = ref({
  'Padding': 10,
  'Node Repulsion': 4500,
  'Ideal Edge Length': 50,
  'Edge Elasticity': 0.45,
  'Nesting Factor': 0.1,
  'Number of Iter.': 2500,
  'Gravity': 0.25,
  'Gravity Range': 3.8,
  'Gravity Compound': 1.0,
  'Gravity Range Comp.': 1.5,
  'Tiling Padding Vert.': 10,
  'Tiling Padding Hor.': 10
})
const initialLayoutParameters = ref({})

const updateParam = (parameter: string, value: number) => {
  layoutParameters.value = {
    ...layoutParameters.value,
    [parameter]: value
  }
}

onMounted(() => {
  console.log('Reading model')
  fetch(`/models/${modelReference.value}.json`).then(fileString => fileString.text())
    .then(json => {
      const sbml = JSON.parse(json)
      modelLoaded.value = true
      const cyContainer = document.getElementById('graphHolder')
      if (cyContainer) {
        updateLayout()
        render(sbml)
      } else {
        console.error('Cytoscape container not found!')
      }
    })
    .catch(error => {
      noModelFound.value = true
    })

  initialLayoutParameters.value = { ...layoutParameters.value }
})

const resetParams = () => {
  layoutParameters.value = { ...initialLayoutParameters.value }
  reload()
}

const render = (elements) => {
  let stylesheet = adjustStylesheet()

  cy.value = cytoscape({
    container: document.getElementById('graphHolder'),
    elements: elements,
    style: stylesheet,
    layout: {
      ...layout.value
    }
  })
}

const updateLayout = () => {
  layout.value = {
    name: 'fcose',
    padding: layoutParameters.value['Padding'],
    nodeRepulsion: node => layoutParameters.value['Node Repulsion'],
    idealEdgeLength: edge => layoutParameters.value['Ideal Edge Length'],
    edgeElasticity: edge => layoutParameters.value['Edge Elasticity'],
    nestingFactor: layoutParameters.value['Nesting Factor'],
    numIter: layoutParameters.value['Number of Iter.'],
    gravity: layoutParameters.value['Gravity'],
    gravityRange: layoutParameters.value['Gravity Range'],
    gravityCompound: layoutParameters.value['Gravity Compound'],
    gravityRangeCompound: layoutParameters.value['Gravity Range Comp.'],
    tilingPaddingVertical: layoutParameters.value['Tiling Padding Vert.'],
    tilingPaddingHorizontal: layoutParameters.value['Tiling Padding Hor.']
  }
}

const reload = () => {
  paramsDropdownOpen.value = false

  updateLayout()

  cy.value.layout(layout.value).run()
}

const downloadImage = () => {
  let png = cy.value.jpg()
  let a = document.createElement('a')
  a.href = png
  a.download = 'graph.jpg'
  a.click()
}

</script>

<style lang="scss">
#graphHolder {
  width: 100%;
  height: 500px;
}
</style>

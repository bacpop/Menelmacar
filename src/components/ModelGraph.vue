<template>
  <div v-if="cy!==null" id="initial_layout">
    <Popper>
      <button id="choose_layout">Choose layout</button>
      <template #content>
        <div v-for="value in Object.entries(this.layoutParameters)" :key="value[1]">
          <label class="keys_layout">{{ value[0] }}</label>
          <input class="values_layout" type="number" :value="value[1]"
                 @change="event => this.layoutParameters[value[0]] = +event.target.value" />
        </div>
        <div class="layout_button">
          <button @click="reload">Reload with new layout</button>
        </div>
        <div class="parameters_button">
          <button @click="Object.assign(this.layoutParameters, this.initialLayoutParameters); reload()">Reset layout
          </button>
        </div>
      </template>
    </Popper>
  </div>
  <p v-if="!modelLoaded & !noModelFound">Loading image...</p>
  <div v-else-if="noModelFound">
    <h2>The JSON file for this model doesn't exist</h2>
  </div>
  <div id="graphHolder"></div>
  <button id="downloadGraph" v-if="cy!==null" @click="downloadImage">Download graph as an image</button>

</template>

<script setup lang="ts">
import cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import { adjustStylesheet } from '../utils/stylesheet.ts'
import Popper from 'vue3-popper'
import { onMounted, ref } from 'vue'

cytoscape.use(fcose)

const props = defineProps<{ modelReference: string }>()
const modelReference = ref(props.modelReference)

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


onMounted(() => {
  console.log('Reading model')
  fetch(`/models/${modelReference.value}.json`).then(fileString => fileString.text())
    .then(json => {
      let sbml = JSON.parse(json)
      modelLoaded.value = true
      const cyContainer = document.getElementById('graphHolder')
      if (cyContainer) {
        render(sbml)
      } else {
        console.error('Cytoscape container not found!')
      }
    })
    .catch(error => {
      noModelFound.value = true
    })

  initialLayoutParameters.value = { ...layoutParameters.value }

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
})

const render = (elements) => {
  let stylesheet = adjustStylesheet()

  const cy = cytoscape({
    container: document.getElementById('graphHolder'),
    elements: elements,
    style: stylesheet,
    layout: {
      name: 'fcose' // Or other layout options
    }
  })
  cy.value = cy
}

const reload = () => {
  this.layout = {
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

  cy.value.layout(layout.value).run()
}

const downloadImage = () => {
  let png = this.cy.jpg()
  let a = document.createElement('a')
  a.href = png
  a.download = 'graph.jpg'
  a.click()
}

</script>

<style lang="scss">
:root {
  --popper-theme-background-color: lightgray;
  --popper-theme-background-color-hover: lightgray;
  --popper-theme-text-color: black;
  --popper-theme-border-width: 3px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 5px;
}

#choose_layout {
  margin: 10px 0;
}

#graphHolder {
  width: calc(100% - 40px);
  height: 400px;
  margin: 40;
  border: 1px solid black;
}

.keys_layout {
  display: inline-block;
  width: 150px;
  padding-bottom: 5px;
}

.values_layout {
  display: inline-block;
  width: 150px;
}

#initial_layout {
  margin-top: 10px;
}

#downloadGraph {
  margin: 10px 0;
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { cn } from '@/lib/utils.ts'
import { PkgWrapper } from '@reside-ic/odinjs'
import { extractParameters, range } from '@/utils/models.ts'
import type { ModelDetails, ModelResults } from '@/utils/types.ts'
import { getModelData } from '@/utils/api.ts'
import { ArrowDown, ArrowUp, ExternalLink } from 'lucide-vue-next'
import { LineChart } from '@/components/ui/chart-line'
import { rangeAndDomain, scale_y } from '@/utils/charts.ts'
import GraphViewer from '@/components/GraphViewer.vue'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'

const router = useRouter()
const modelId = ref(router.currentRoute.value.params.modelId)
const activeTab = ref(router.currentRoute.value.params.tab || 'plot')

const expandDescription = ref(false)

const parameters = ref(null)
const paramsDropdownOpen = ref(false)

const modelResults: ModelResults = ref(null)

const logScale = ref(false)
const time = ref([5])
const times = ref([])

const ymax = ref([100])

const chartData = ref([])

const hasResults = computed(() => modelResults.value !== null)

const modelDetails: ModelDetails = ref(null)

const chartColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#FFA726',
  '#9C27B0',
  '#00BCD4',
  '#8BC34A',
  '#FF9800',
  '#673AB7',
  '#03A9F4',
  '#E91E63'
]

watch(router.currentRoute, () => {
  if (router.currentRoute.value.params.modelId) {
    modelId.value = router.currentRoute.value.params.modelId
  }

  if (router.currentRoute.value.params.tab) {
    activeTab.value = router.currentRoute.value.params.tab
  }
})

const runModel = async () => {
  if (!modelId.value) return

  if (!parameters.value) {
    parameters.value = await extractParameters(modelId.value)
  }

  const models = await import(`../../public/models/${modelId.value}.js`)
  const model = models.model

  const mod = new PkgWrapper(model, parameters.value, 'error')
  times.value = range(0, time.value[0], 1000)

  modelResults.value = mod.run(times.value, null, {})

  const { yDomain, yRange } = rangeAndDomain(
    modelResults.value,
    ymax.value[0],
    logScale.value
  )

  chartData.value = modelResults.value.y
    .map((d, i) => (
      ({
        time: times.value[i],
        ...modelResults.value.names.reduce((acc, i, ix) => ({
          ...acc,
          [i]: scale_y(d[ix], logScale.value, yDomain, yRange)
        }), {})
      })
    ))
}

const updateParam = (parameter: string, value: number) => {
  parameters.value = {
    ...parameters.value,
    [parameter]: value
  }
}

const applyParameters = () => {
  void runModel()
  paramsDropdownOpen.value = false
}

watch([modelId, time, ymax, logScale], () => {
  void runModel()
})

watch(modelId, async () => {
  modelResults.value = null
  parameters.value = null
  void runModel()

  modelDetails.value = null
  modelDetails.value = await getModelData(modelId.value)
})

onMounted(async () => {
  void runModel()

  parameters.value = null
  modelDetails.value = null
  modelDetails.value = await getModelData(modelId.value)
})

</script>

<template>
  <div class="flex flex-col items-center justify-content-start py-10">
    <div class="flex flex-col max-w-[1120px] w-full">
      <div class="text-light-grey flex flex-row items-center gap-2">
        <div class="flex flex-col items-start gap-2">
          <h1 class="text-2xl font-semibold">
            {{ modelDetails?.name || 'Loading...' }}
          </h1>

          <div :class="cn('relative rounded-md max-h-36 overflow-hidden transition-all text-gray-300', expandDescription && 'max-h-full')">

            <div v-html="modelDetails?.description"></div>

            <div
              class="absolute bottom-0 left-0 h-20 pb-2 bg-gradient-to-t from-slate-darker to-slate-darker/30 w-full flex flex-row items-end justify-center cursor-pointer"
              @click="expandDescription = !expandDescription">
              <ArrowDown v-if="!expandDescription" size="16" />
              <ArrowUp v-if="expandDescription" size="16" />
            </div>
          </div>

          <a class="font-normal text-light-grey flex flex-row items-center gap-1 hover:underline"
             :href="`https://www.ebi.ac.uk/biomodels/${modelId}`"
             target="_blank">
            {{ modelId }}
            <ExternalLink size="16" />
          </a>
        </div>

      </div>
      <div class="flex flex-row gap-8 pt-8">
        <router-link :to="'/view/'+modelId+'/plot'"
                     :class="cn('text-light-grey opacity-80 hover:opacity-100 pb-4 px-2 border-b-4 border-transparent', activeTab==='plot'?'border-blue':'')">
          Overall plot
        </router-link>
        <router-link :to="'/view/'+modelId+'/variables'"
                     :class="cn('text-light-grey opacity-80 hover:opacity-100 pb-4 px-2 border-b-4 border-transparent', activeTab==='variables'?'border-blue':'')">
          Individual variables
        </router-link>
        <router-link :to="'/view/'+modelId+'/graph'"
                     :class="cn('text-light-grey opacity-80 hover:opacity-100 pb-4 px-2 border-b-4 border-transparent', activeTab==='graph'?'border-blue':'')">
          Graph of the model
        </router-link>
      </div>
    </div>

    <div class="border-t border-slate w-full h-1"></div>

    <div v-if="hasResults"
         class="flex flex-col max-w-[1120px] w-full py-8 text-light-grey">
      <div class="flex flex-row w-full gap-6 items-center">
        <DropdownMenu :open="paramsDropdownOpen">
          <DropdownMenuTrigger
            @click="paramsDropdownOpen = !paramsDropdownOpen"
            class="rounded-md uppercase bg-transparent border border-white font-medium transition-colors px-4 py-2 text-sm max-h-9 hover:bg-white hover:text-black">
            Initial parameters
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom"
                               align="start"
                               side-offset="0"
                               :prioritize-position="true"
                               class="bg-white rounded-md shadow-lg w-full">
            <DropdownMenuItem v-for="parameter in Object.keys(parameters)">
              <label :for="`param_${parameter}`" class="w-2/4">
                {{ parameter }}:
              </label>
              <Input type="number"
                     :name="`param_${parameter}`"
                     :id="`param_${parameter}`"
                     :value="parameters[parameter]"
                     @input="event => updateParam(parameter, Number(event.target.value))" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button @click="applyParameters">
                Apply
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <label class="flex items-center gap-2">
          <Checkbox :checked="logScale" @update:checked="logScale = !logScale" />
          Y axis log scale
        </label>

        <div class="flex flex-row flex-grow gap-4 items-center">
          <label class="whitespace-nowrap">Time: {{ time[0] }}</label>
          <Slider
            v-model="time"
            :default-value="[5]"
            :max="1000"
            :min="5"
            :step="1"
          />
        </div>
      </div>

      <div v-if="activeTab === 'plot'">
        <div class="bg-slate-dark rounded-md p-4 mt-8 flex flex-col gap-4">
          <div class="flex-grow flex flex-row gap-2 h-[500px]">
            <div class="flex flex-col flex-grow w-[80px] h-full items-center">
              <p class="whitespace-nowrap mb-4">Max Y</p>
              <Slider
                v-model="ymax"
                :default-value="[5]"
                :max="100"
                :min="70"
                :step="0.1"
                orientation="vertical"
              />
            </div>
            <LineChart
              class="h-full"
              :data="chartData"
              :colors="chartColors"
              :categories="modelResults.names"
              :show-x-axis="true"
              :show-y-axis="true"
              :show-grid-line="false"
              :x-formatter="(tick) =>Number(chartData[tick].time).toFixed(4)"
              index="time" />
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'variables'">
        <div class="mt-8 flex flex-row flex-wrap gap-4">
          <div class="bg-slate-dark rounded-md p-4 flex-grow"
               v-for="variable in modelResults.names">
            <LineChart
              class="h-full w-full"
              :data="chartData"
              :colors="chartColors"
              :categories="[variable]"
              :show-x-axis="true"
              :show-y-axis="true"
              :show-grid-line="false"
              :x-formatter="(tick) =>Number(chartData[tick].time).toFixed(4)"
              index="time" />
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'graph'">
        <div class="bg-slate-dark rounded-md p-4 mt-8 flex flex-row flex-wrap gap-4">
          <GraphViewer :model_reference="modelId" />
        </div>
      </div>
    </div>
  </div>
</template>


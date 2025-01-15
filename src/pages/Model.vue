<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { cn } from '@/lib/utils.ts'
import { PkgWrapper } from '@reside-ic/odinjs'
import { extractParameters, range } from '@/utils/models.ts'
import type { ModelDetails, ModelResults } from '@/utils/types.ts'
import SingleViewer from '@/components/SingleViewer.vue'
import VueSlider from 'vue-3-slider-component'
import { Button } from '@/components/ui/button'
import { getModelData } from '@/utils/api.ts'
import { ExternalLink } from 'lucide-vue-next'

const router = useRouter()
const modelId = ref(router.currentRoute.value.params.modelId)
const activeTab = ref(router.currentRoute.value.params.tab || 'plot')

const parameters = ref(null)
const modelResults: ModelResults = ref(null)

const logScale = ref(false)
const time = ref(5)
const times = ref([])

const hasResults = computed(() => modelResults.value !== null)

const modelDetails: ModelDetails = ref(null)

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
  times.value = range(0, time.value, 1000)

  modelResults.value = mod.run(times.value, null, {})

  console.log(modelResults.value)
}

watch([modelId, time], () => {
  void runModel()
})

watch(modelId, async () => {
  modelDetails.value = null
  modelDetails.value = await getModelData(modelId.value)
})

onMounted(async () => {
  void runModel()

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
      <div v-if="activeTab === 'plot'">
        <div class="flex flex-row w-full gap-6 items-center">
          <Button variant="outline" class="rounded-md uppercase bg-transparent">
            Choose initial parameters
          </Button>

          <label>
            <input type="checkbox"
                   v-model="logScale" />
            Y axis log scale
          </label>

          <div class="flex flex-row flex-grow gap-4 items-center">
            <label for="time">Time: {{ time }}</label>
            <VueSlider class="w-full flex-grow"
                       v-model="time"
                       :lazy="false"
                       :min="5"
                       :max="1000"
                       :interval="1" />
          </div>
        </div>
        <div class="bg-slate-dark rounded-md p-4 mt-8">
          <SingleViewer :times="times"
                        :results_names="modelResults.names"
                        :results_y="modelResults.y"
                        :log_scale="logScale" />
        </div>
      </div>
    </div>
  </div>
</template>


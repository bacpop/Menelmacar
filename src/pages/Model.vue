<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { cn } from '@/lib/utils.ts'
import { PkgWrapper } from '@reside-ic/odinjs'
import { extractParameters, range } from '@/utils/models.ts'
import type { ModelResults } from '@/utils/types.ts'

const router = useRouter()
const modelId = ref(router.currentRoute.value.params.modelId)
const activeTab = ref(router.currentRoute.value.params.tab || 'plot')

const parameters = ref(null)
const time = ref(5)
const modelResults: ModelResults = ref(null)

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
  const times = range(0, time.value, 1000)

  modelResults.value = mod.run(times, null, {})

  console.log(modelResults.value)
}

watch(modelId, () => {
  void runModel()
})

onMounted(() => {
  void runModel()
})

</script>

<template>
  <div class="flex flex-col items-center justify-content-start py-10">
    <div class="flex flex-col max-w-[1120px] w-full">
      <h1 class="text-2xl text-light-grey font-semibold">
        {{ modelId }}
      </h1>
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
  </div>
</template>


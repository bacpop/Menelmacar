<template>
  <div :class="cn('py-12 items-center gap-4 text-light-grey-dark flex flex-col', isHome ? '' : 'px-4')">
    <a v-if="modelId"
       target="_blank"
       :href="`https://github.com/bacpop/odinviewer/issues/new?title=Model%20error:%20${modelId}`">
      Noticed an error with a model? Report it here.
    </a>
    <p>&copy; 2025. All rights reserved.</p>
    <p> Project idea and SBMLtoOdin: Leonie Lorenz and John Lees, Development of Menelmacar website: Antoine Andréoletti, Web design: Andrea Epifani, Zeqing Lu (Gomoku Studio) </p>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '@/lib/utils.ts'
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = defineProps<{ isHome: boolean }>()
  const isHome = ref(props.isHome)

  const modelId = ref('')

  watch(router.currentRoute, () => {
    if (router.currentRoute.value.params.modelId) {
      modelId.value = router.currentRoute.value.params.modelId
    }
  })

  watch(props, () => {
    isHome.value = props.isHome
  })
</script>

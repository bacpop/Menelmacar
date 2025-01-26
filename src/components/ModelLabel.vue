<script setup async lang="ts">
import { onMounted, ref, watch } from 'vue'
import { queryGetModelDetails } from '@/utils/query/queryGetModelDetails.ts'


const props = defineProps<{ modelId: string }>()

const { data } = queryGetModelDetails(props.modelId)
const label = ref('Loading...')

watch(data, () => {
  label.value = data.value.name
})

onMounted(() => {
  if (data.value) {
    label.value = data.value.name
  } else {
    label.value = 'Loading...'
  }
})
</script>
<template>
  {{ label }}
</template>

<template>
  <div :class="cn('flex py-12 items-center gap-4 text-light-grey-dark', isHome ? '' : 'px-4')">
    <p>&copy; 2025. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '@/lib/utils.ts'
  import { ref, watch } from 'vue'

  const props = defineProps<{ isHome: boolean }>()
  const isHome = ref(props.isHome)

  watch(props, () => {
    isHome.value = props.isHome
  })
</script>

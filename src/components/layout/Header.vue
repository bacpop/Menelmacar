<template>
  <div :class="cn('flex items-center gap-4', isHome ? 'py-12' : 'p-4 border-b border-slate')">
    <router-link to="/" class="flex items-center gap-2 text-light-grey opacity-80 hover:opacity-100">
      <img src="/assets/logo.png" alt="Menelmacar" class="h-12 w-12">
      <h1 class="text-xl font-semibold text-white">
        Menelmacar
      </h1>
    </router-link>

    <div v-if="!isHome" class="flex items-center gap-4 pl-8">
      <router-link to="/#faq" class="text-light-grey opacity-80 hover:opacity-100">
        FAQ
      </router-link>
    </div>

    <ModelSelect v-if="!isHome" inline/>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '@/lib/utils.ts'
  import { ref, watch } from 'vue'
  import ModelSelect from '@/components/ModelSelect.vue'

  const props = defineProps<{ isHome: boolean }>()
  const isHome = ref(props.isHome)

  watch(props, () => {
    isHome.value = props.isHome
  })
</script>

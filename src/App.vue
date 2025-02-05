<script setup lang="ts">
import { useRoute } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { ref, watch } from 'vue'

const currentRoute = useRoute()

const isHome = ref(false)

watch(currentRoute, () => {
  if (currentRoute.name === 'home') {
    isHome.value = true
  } else {
    isHome.value = false
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-content-start">
    <div :class="'flex-col ' + (isHome ? 'max-w-[1120px] w-full' : 'w-full')">
      <Header :is-home="isHome" />

      <router-view />

      <Footer :is-home="isHome" />
    </div>
  </div>
</template>

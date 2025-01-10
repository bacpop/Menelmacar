<template>
  <div class="flex p-12 items-center gap-4">
    <img src="/assets/logo.png" alt="Menelmacar" class="h-12 w-12">
    <h1 class="text-xl font-semibold text-white">
      Menelmacar
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
})
</script>

<style scoped>
</style>

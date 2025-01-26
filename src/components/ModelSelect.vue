<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxPortal,
  ComboboxRoot
} from 'reka-ui'
import { Search } from 'lucide-vue-next'
import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button'
import { getAvailableModels } from '@/utils/api.ts'
import ModelLabel from '@/components/ModelLabel.vue'
import { watchDeep } from '@vueuse/core'

const models = ref([])

const router = useRouter()
const value = ref(null)
const searchTerm = ref('')
const searchOpen = ref(false)

const props = defineProps<{ inline: boolean }>()
const inline = ref(props.inline)

watch(props, () => {
  inline.value = props.inline
})

watch(router.currentRoute, () => {
  if (router.currentRoute.value.params.modelId) {
    value.value = router.currentRoute.value.params.modelId
  }
})

watchDeep(value, () => {
  if (value.value && value.value.value !== router.currentRoute.value.params.modelId) {
    router.push(`/view/${value.value.value}`)
  }
})

onMounted(async () => {
  models.value = await getAvailableModels()
})

const filteredModels = computed(() => {
  if (searchTerm.value.length === 0) {
    return models.value.slice(0, 10)
  }

  return models.value.filter(model => {
    return model.value.toLowerCase().includes(searchTerm.value.toLowerCase())
  }).slice(0, 10)
})
</script>

<template>
  <div :class="cn('flex flex-row gap-4 items-center', inline ? 'w-full justify-end' : '')">
    <ComboboxRoot v-model="value"
                  :open="searchOpen"
                  ignore-filter>
      <div class="flex items-center border-b px-3 bg-white rounded-md w-[450px]">
        <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <ComboboxInput v-model="searchTerm"
                       @focus="searchOpen = true"
                       @blur="searchOpen = false"
                       placeholder="Enter model ID or name"
                       :class="cn('flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50')"
        />
      </div>
      <ComboboxAnchor class="w-[450px]" />
      <ComboboxPortal>
        <ComboboxContent :class="cn('p-2 bg-white w-[450px] rounded-b-md max-h-[200px] overflow-y-auto')"
                         side="bottom"
                         position="popper">
          <ComboboxItem v-for="model in filteredModels"
                        :class="cn('relative flex flex-col items-start cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50')"
                        :key="model.value"
                        :value="model">
            <ModelLabel :model-id="model.value" />
            <br>
            <span class="text-xs inline-block pt-1 opacity-75">
              {{ model.value }}
            </span>
          </ComboboxItem>
          <ComboboxEmpty>
            <span class="text-sm">
              No models found.
            </span>
          </ComboboxEmpty>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
  </div>
</template>

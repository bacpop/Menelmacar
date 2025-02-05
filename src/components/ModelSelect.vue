<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import debounce from 'lodash.debounce'
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
import { getAvailableModels, searchModels } from '@/utils/api.ts'
import ModelLabel from '@/components/ModelLabel.vue'

const models = ref([])

const router = useRouter()
const value = ref('')
const searchTerm = ref('')
const searchOpen = ref(false)
const apiResults = ref([])

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

const openModel = (modelId: string) => {
  searchOpen.value = false
  if (modelId && modelId !== router.currentRoute.value.params.modelId) {
    value.value = modelId
    router.push(`/view/${modelId}`)
  }
}

onMounted(async () => {
  models.value = await getAvailableModels()
})

watch(searchTerm, debounce(async () => {
  const modelsResult = await searchModels(searchTerm.value)
  apiResults.value = modelsResult?.models.map(model => model.id)
}, 500))

const filteredModels = computed(() => {
  if (searchTerm.value.length === 0) {
    return models.value.slice(0, 10)
  }

  return models.value.filter(model => {
    return model.value.toLowerCase().includes(searchTerm.value.toLowerCase()) || apiResults.value.includes(model.value)
  }).slice(0, 10)
})
</script>

<template>
  <div :class="cn('flex flex-row gap-4 items-center', inline ? 'w-full justify-end' : '')">
    <ComboboxRoot :open="searchOpen"
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
                        @select.prevent
                        @mousedown.prevent.stop="() => openModel(model.value)"
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

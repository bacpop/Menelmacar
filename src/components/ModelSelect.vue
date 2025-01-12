<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ComboboxAnchor, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'radix-vue'
import { Search } from 'lucide-vue-next'
import { cn } from '@/lib/utils.ts'
import { Button } from '@/components/ui/button'

const models = [
  { value: 'BIOMD0000000982', label: 'BIOMD0000000982' },
  { value: 'BIOMD0000000012', label: 'BIOMD0000000012' }
]

const router = useRouter()
const value = ref('')

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

watch(value, () => {
  if (value.value && value.value !== router.currentRoute.value.params.modelId) {
    router.push(`/view/${value.value}`)
  }
})

const loadModel = () => {
  if (value.value && value.value !== router.currentRoute.value.params.modelId) {
    router.push(`/view/${value.value}`)
  }
}
</script>

<template>
  <div :class="cn('flex flex-row gap-4 items-center', inline ? 'w-full justify-end' : '')">
    <ComboboxRoot v-model="value">
      <div class="flex items-center border-b px-3 bg-white rounded-md w-[450px]">
        <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <ComboboxInput
          placeholder="Enter model name"
          :class="cn('flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50')"
        />
      </div>
      <ComboboxAnchor class="w-[450px]" />
      <ComboboxPortal>
        <ComboboxContent :class="cn('p-2 bg-white w-[450px] rounded-b-md')"
                         side="bottom"
                         position="popper">
          <ComboboxItem
            :class="cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50')"
            v-for="model in models"
            :key="model.value"
            :value="model.value"
            @select="open = false"
          >
            {{ model.label }}
          </ComboboxItem>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>

    <Button class="p-5 h-[45px] bg-blue hover:bg-blue-dark"
            v-if="!inline"
            @click="loadModel">
      Load model
    </Button>
  </div>
</template>

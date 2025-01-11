<script setup lang="ts">
import { ref } from 'vue'
import { ComboboxAnchor, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxPortal, ComboboxRoot } from 'radix-vue'
import { Search } from 'lucide-vue-next'
import { cn } from '@/lib/utils.ts'


const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' }
]

const searching = ref(false)
const value = ref('')

function filterFunction(list: typeof people[number], searchTerm: string) {
  console.log(searchTerm)
  if (searchTerm !== '') {
    searching.value = true
  }
  return list
}
</script>

<template>
  <div>
    <ComboboxRoot v-model="value">
      <div class="flex items-center border-b px-3 bg-white rounded-md w-[450px]">
        <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <ComboboxInput
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
            v-for="framework in frameworks"
            :key="framework.value"
            :value="framework.value"
            @select="open = false"
          >
            {{ framework.label }}
          </ComboboxItem>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
  </div>
</template>

import { useQuery } from '@tanstack/vue-query'
import { getModelData } from '@/utils/api.ts'

export const queryGetModelDetails = (modelId: string) => useQuery({
  cacheTime: 1000 * 60 * 60 * 24,
  queryKey: ['getModelDetails', modelId],
  queryFn: () => {
    return getModelData(modelId)
  },
})

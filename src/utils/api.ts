import type { ModelDetails } from '@/utils/types.ts'

export const getModelData = async (modelId: string): Promise<ModelDetails> => {
  const response = await fetch(`https://www.ebi.ac.uk/biomodels/${modelId}?format=json`)
  const data = await response.json()
  return data
}

export const getAvailableModels = async () => {
  const response = await fetch('/models/file_names.txt')
  const data = await response.text()
  const models: string[] = data.split('\n').slice(0, -1).map(file => file.split('\r').at(0))

  const modelsData = await Promise.all(models.map(async model => {
    return await getModelData(model)
  }))

  return models.map((model, index) => {
    return {
      value: model,
      label: modelsData[index].name
    }
  })
}

export function range(start: number, end: number, length: number) {
  return Array(length).fill().map((_, idx) => start + idx * (end - start) / (length - 1))
}

export const extractParameters = async (modelId: string) => {
  try {
    const response = await fetch(`/models/${modelId}.js`)
    if (response.ok) {
      const fileContent = await response.text()

      const parametersSplit = fileContent.replaceAll('this.base.user.setUserScalar(user, ', '$').split('$')

      return parametersSplit.reduce((acc, cur, i) => {
        if (i > 0) {
          acc[cur.split(',')[0].replaceAll('"', '')] = +cur.split(',')[2]
        }
        return acc
      }, {})
    } else {
      console.error('Failed to load file')
    }
  } catch (error) {
    console.error('Error fetching file:', error)
  }
}

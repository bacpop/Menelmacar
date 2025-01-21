export const rangeAndDomain = (modelResults, ymax: number, logScale: boolean) => {
  let max_y = Math.max(...modelResults.y[0])
  let min_y = Math.min(...modelResults.y[0])

  modelResults.y.forEach((d, i) => {
    if (Math.max(...d) > max_y) {
      max_y = Math.max(...d)
    }

    if (Math.min(...d) < min_y) {
      min_y = Math.min(...d)
    }
  })

  const yDomain = [
    min_y - Math.abs(0.1 * min_y),
    min_y + Math.exp(ymax) / Math.exp(100) * max_y * 1.1
  ]

  if (logScale) {
    if (min_y < 1e-6 && min_y > 0) {
      console.log('Values close to 0 in log scale')
      yDomain[0] = min_y - Math.abs(0.1 * min_y)
      yDomain[1] = min_y + Math.exp(ymax) / Math.exp(100) * max_y * 1.1
    } else {
      yDomain[0] = Math.max(min_y - Math.abs(0.1 * min_y), 1e-100)
      yDomain[1] = min_y + Math.exp(ymax) / Math.exp(100) * max_y * 1.1
    }
  }

  const yRange = [0, Math.max(...yDomain)]

  return { yDomain, yRange }
}

export const scale_y = (value: number, logScale: boolean, yDomain: number[], yRange: number[]) => {
  if (logScale) {
    return log_scale_y(value, yDomain, yRange)
  }

  // Ensure value is within domain bounds
  const clampedValue = Math.max(yDomain[0], Math.min(yDomain[1], value))

  // Calculate the percentage of where the value sits in the domain
  const domainPercentage = (clampedValue - yDomain[0]) / (yDomain[1] - yDomain[0])

  // Map that percentage to the range
  return yRange[0] + (yRange[1] - yRange[0]) * domainPercentage
}

export const log_scale_y = (value: number, yDomain: number[], yRange: number[]) => {
  // Handle zero or negative values in log scale
  const minPositive = Math.max(Number.EPSILON, yDomain[0])

  // Ensure value is positive and within domain bounds
  const clampedValue = Math.max(minPositive, Math.min(yDomain[1], value))

  // Convert to log scale
  const logValue = Math.log(clampedValue)
  const logDomainMin = Math.log(minPositive)
  const logDomainMax = Math.log(yDomain[1])

  // Calculate the percentage in log space
  const logPercentage = (logValue - logDomainMin) / (logDomainMax - logDomainMin)

  // Map that percentage to the range
  return yRange[0] + (yRange[1] - yRange[0]) * logPercentage
}

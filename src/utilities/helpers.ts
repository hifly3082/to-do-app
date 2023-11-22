export const generateId = (): string => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

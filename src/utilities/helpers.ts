import { Todo } from '../types'

export const generateId = (): string => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

export const getRandomBoolean = () => Math.random() < 0.5

export const getRandomDate = () => {
  const currentDate = new Date()
  const randomDays = Math.floor(Math.random() * 365)
  const randomHours = Math.floor(Math.random() * 24)
  const randomMinutes = Math.floor(Math.random() * 60)
  currentDate.setDate(currentDate.getDate() + randomDays)
  currentDate.setHours(randomHours, randomMinutes)

  return currentDate.toISOString()
}

export const getRandomFromArray = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export const calculateCompletionPercentage = (todos: Todo[]) => {
  if (todos.length === 0) return 0

  const completedTodos = todos.filter((todo) => todo.completed)
  const completionPercentage = (completedTodos.length / todos.length) * 100

  return parseInt(completionPercentage.toFixed(0))
}

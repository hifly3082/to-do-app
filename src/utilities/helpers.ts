import { Todo } from '../types'

export const generateId = (): string => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

export const calculateCompletionPercentage = (todos: Todo[]) => {
  if (todos.length === 0) return 0

  const completedTodos = todos.filter((todo) => todo.completed)
  const completionPercentage = (completedTodos.length / todos.length) * 100

  return parseInt(completionPercentage.toFixed(0))
}

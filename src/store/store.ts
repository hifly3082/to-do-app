import { createStore, action, persist, Action } from 'easy-peasy'
import { Todo } from '../types'

const generateId = (): string => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

interface StoreModel {
  todo: Todo
  todos: Todo[]
  addTodo: Action<StoreModel, Todo>
  deleteTodo: Action<StoreModel, string>
  copyTodo: Action<StoreModel, string>
}

const todoModel: Todo = {
  id: '',
  status: false,
  name: '',
  description: '',
  dueDate: ''
}

const storeModel: StoreModel = {
  todo: todoModel,
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({
      id: generateId(),
      status: false,
      name: payload.name,
      description: payload.description,
      dueDate: payload.dueDate
    })
  }),
  deleteTodo: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  }),
  copyTodo: action((state, id) => {
    const todoToCopy = state.todos.find((todo) => todo.id === id)
    if (todoToCopy) {
      const newTodo: Todo = {
        ...todoToCopy,
        id: generateId()
      }
      state.todos.push(newTodo)
    }
  })
}

const store = createStore(persist(storeModel))

// store.flush()

export default store

import { createStore, action, persist, Action } from 'easy-peasy'
import { Todo, User } from '../types'
import { generateId } from '../utilities/helpers'

export interface StoreModel {
  isAuthenticated: boolean
  user: User
  login: Action<StoreModel, User>
  logout: Action<StoreModel, boolean>
  todos: Todo[]
  addTodo: Action<StoreModel, Todo>
  loadData: Action<StoreModel, Todo[]>
  deleteTodo: Action<StoreModel, string>
  copyTodo: Action<StoreModel, string>
  editTodo: Action<StoreModel, Todo>
  toggleStatus: Action<StoreModel, string>
}

const storeModel: StoreModel = {
  isAuthenticated: false,
  user: {
    email: 'johndoe@example.com',
    password: 'johndoe@example.com'
  },
  login: action((state, payload) => {
    if (
      payload.email === state.user.email &&
      payload.password === state.user.password
    ) {
      state.isAuthenticated = true
    } else {
      throw new Error('Login failed')
    }
  }),
  logout: action((state) => {
    state.isAuthenticated = false
  }),
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({
      id: generateId(),
      completed: false,
      name: payload.name,
      description: payload.description,
      dueDate: payload.dueDate || null
    })
  }),
  // Loading sample data
  loadData: action((state, payload) => {
    if (Array.isArray(payload)) {
      payload.forEach((item) => {
        state.todos.push(item)
      })
    }
  }),
  deleteTodo: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id)
  }),
  copyTodo: action((state, id) => {
    const todo = state.todos.find((todo) => todo.id === id)
    if (todo) {
      const newTodo: Todo = {
        ...todo,
        id: generateId()
      }
      state.todos.push(newTodo)
    }
  }),
  editTodo: action((state, payload) => {
    const todo = state.todos.find((todo) => todo.id === payload.id)
    if (todo) {
      todo.name = payload.name
      todo.description = payload.description
      todo.dueDate = payload.dueDate || null
    }
  }),
  toggleStatus: action((state, id) => {
    const todo = state.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  })
}

const store = createStore<StoreModel>(persist(storeModel))

export default store

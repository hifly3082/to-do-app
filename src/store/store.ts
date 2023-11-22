import { createStore, action, persist, Action } from 'easy-peasy'
import { BaseTodo, ExtendedTodo } from '../types'
import { generateId } from '../utilities/helpers'
import dayjs from 'dayjs'

const todoModel: ExtendedTodo = {
  id: '',
  completed: false,
  name: '',
  description: '',
  dueDate: ''
}

export interface StoreModel {
  todo: ExtendedTodo
  todos: ExtendedTodo[]
  addTodo: Action<StoreModel, BaseTodo>
  deleteTodo: Action<StoreModel, string>
  copyTodo: Action<StoreModel, string>
  editTodo: Action<StoreModel, ExtendedTodo>
  toggleStatus: Action<StoreModel, string>
}

const storeModel: StoreModel = {
  todo: todoModel,
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({
      id: generateId(),
      completed: false,
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
      const newTodo: ExtendedTodo = {
        ...todoToCopy,
        id: generateId()
      }
      state.todos.push(newTodo)
    }
  }),
  editTodo: action((state, payload) => {
    const { todoToEdit, values } = payload
    // console.log(`payload`, payload)
    const todo = state.todos.find((todo) => todo.id === todoToEdit.id)
    if (todo) {
      todo.name = values.name
      todo.description = values.description
      todo.dueDate = values.dueDate
    }
  }),
  toggleStatus: action((state, payload) => {
    const { id, completed } = payload
    console.log(`payload id`, id)
    const todo = state.todos.find((todo) => todo.id === id)
    console.log('Action called with todoId:', id)
    if (todo) {
      todo.completed = !todo.completed
    }
  })
}

const store = createStore<StoreModel>(persist(storeModel))

export default store

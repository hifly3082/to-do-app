import { createStore, action, persist, Action } from 'easy-peasy'
import { Todo } from '../types'
import { generateId } from '../utilities/helpers'

export interface StoreModel {
  todos: Todo[]
  addTodo: Action<StoreModel, Todo>
  deleteTodo: Action<StoreModel, string>
  copyTodo: Action<StoreModel, string>
  editTodo: Action<StoreModel, Todo>
  toggleStatus: Action<StoreModel, string>
}

const storeModel: StoreModel = {
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
    console.log(`toggleStatus action called with id`, id)
    const todo = state.todos.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  })
}

const store = createStore<StoreModel>(persist(storeModel))

export default store

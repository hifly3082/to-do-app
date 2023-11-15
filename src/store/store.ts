import { createStore, action, persist, Action } from 'easy-peasy'
import { Todo } from '../types'

interface StoreModel {
  todo: Todo
  todos: Todo[]
  addTodo: Action<StoreModel, Todo>
}

const todoModel: Todo = {
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
      status: true,
      name: payload.name,
      description: payload.description,
      dueDate: payload.dueDate
    })
  })
}

const store = createStore(persist(storeModel))

// store.flush()

export default store

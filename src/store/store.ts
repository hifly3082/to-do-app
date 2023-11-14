import { createStore, action, persist } from 'easy-peasy'

const todoModel = {
  status: false,
  name: '',
  description: '',
  dueDate: ''
}

const storeModel = {
  todo: todoModel,
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({
      name: payload.name,
      description: payload.description,
      dueDate: payload.dueDate,
      status: false
    })
  })
}

const store = createStore(persist(storeModel))

// store.flush()

export default store

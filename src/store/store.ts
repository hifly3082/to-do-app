import { createStore, action, persist } from 'easy-peasy'

const todoModel = {
  status: true,
  name: '',
  description: '',
  dueDate: ''
}

const storeModel = {
  todo: todoModel,
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({
      status: false,
      name: payload.name,
      description: payload.description,
      dueDate: payload.dueDate
    })
  })
}

const store = createStore(persist(storeModel))

// store.flush()

export default store

import { createStore, action, persist } from 'easy-peasy'

const todoModel = {
  checkStatus: false,
  name: '',
  description: '',
  dueDate: ''
}

const storeModel = {
  todo: todoModel,
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false })
  })
}

const store = createStore(persist(storeModel))

export default store

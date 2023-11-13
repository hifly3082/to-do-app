import { createStore, action, persist } from 'easy-peasy'

const model = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false })
  })
}

const store = createStore(persist(model))

export default store

export interface Todo {
  text: string
  done: boolean
}

export interface StoreModel {
  todos: Todo[]
}

export const enum RouteNames {
  Lists = 'lists',
  Todo = 'lists/todo',
  Account = 'account',
  About = 'about'
}

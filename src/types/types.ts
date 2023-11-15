export interface Todo {
  status: boolean
  name: string
  description: string
  dueDate: string
}

export const enum RouteNames {
  Lists = 'lists',
  Todo = 'lists/todo',
  Account = 'account',
  About = 'about'
}

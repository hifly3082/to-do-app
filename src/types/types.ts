export interface Todo {
  id?: string
  name: string
  description: string
  dueDate: string
  completed?: boolean
}

export const enum RouteNames {
  Lists = 'lists',
  Todo = 'lists/todo',
  Account = 'account',
  About = 'about'
}

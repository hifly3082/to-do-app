export interface Todo {
  id?: string
  name: string
  description?: string
  dueDate?: string | null
  completed?: boolean
}

export const enum RouteNames {
  Login = 'login',
  Lists = 'lists',
  Todo = 'lists/todo',
  Account = 'account',
  About = 'about'
}

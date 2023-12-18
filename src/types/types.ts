export interface User {
  email: string
  password: string
}

export interface Todo {
  id?: string
  name: string
  description?: string
  dueDate?: string | null
  completed?: boolean
}

export const enum RouteNames {
  Login = 'login',
  Todo = 'todo',
  Account = 'account',
  About = 'about',
  Home = 'home'
}

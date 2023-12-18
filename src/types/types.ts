export interface User {
  email: string
  password: string
  firstName?: string
  lastName?: string
}

export interface Todo {
  id?: string
  name: string
  description?: string
  dueDate?: string | null
  completed?: boolean
}

export const enum RouteNames {
  Home = 'home',
  Login = 'login',
  Todo = 'todo',
  Account = 'account',
  About = 'about'
}

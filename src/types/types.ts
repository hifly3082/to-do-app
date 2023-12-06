export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface Todo {
  id?: string
  name: string
  description?: string
  // dueDate?: string | Date | null | undefined
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

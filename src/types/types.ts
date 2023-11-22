export interface BaseTodo {
  name: string
  description: string
  dueDate: string
}
export interface ExtendedTodo extends BaseTodo {
  id: string
  completed: boolean
}

export const enum RouteNames {
  Lists = 'lists',
  Todo = 'lists/todo',
  Account = 'account',
  About = 'about'
}

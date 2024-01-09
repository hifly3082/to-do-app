import { beforeAll, vi } from 'vitest'
import { createStore } from 'easy-peasy'
import { storeModel } from './store'
import { generateId } from '../utilities/helpers'

describe('Store test', () => {
  beforeAll(() => {
    vi.mock('../utilities/helpers', () => ({
      generateId: vi.fn(() => 'mocked-id') // Use a fixed ID for testing
    }))
  })

  test('login action - successful login', () => {
    const initialState = {
      initialState: {
        user: {
          email: 'test@example.com',
          password: 'password123'
        }
      },
      isAuthenticated: false
    }

    const store = createStore(storeModel, initialState)

    const loginPayload = {
      email: 'test@example.com',
      password: 'password123'
    }

    store.getActions().login(loginPayload)

    expect(store.getState().isAuthenticated).toBe(true)
  })

  test('login action - unsuccessful login', () => {
    const initialState = {
      initialState: {
        user: {
          email: 'test@example.com',
          password: 'password123'
        },
        isAuthenticated: false
      }
    }

    const store = createStore(storeModel, initialState)

    const incorrectLoginPayload = {
      email: 'test@example.com',
      password: 'wrongpassword'
    }

    expect(() => store.getActions().login(incorrectLoginPayload)).toThrow(
      new Error('Login failed')
    )

    expect(store.getState().isAuthenticated).toBe(false)
  })

  test('logout action', () => {
    const initialState = {
      initialState: {
        isAuthenticated: true
      }
    }

    const store = createStore(storeModel, initialState)

    store.getActions().logout()

    expect(store.getState().isAuthenticated).toBe(false)
  })

  test('add todo action', () => {
    const todo = {
      completed: false,
      name: 'Go grocery shopping',
      description: '',
      dueDate: '2023-06-30T00:00:00.000Z'
    }
    const store = createStore(storeModel)

    store.getActions().addTodo(todo)

    expect(store.getState().todos).toEqual([
      {
        id: 'mocked-id',
        completed: false,
        name: 'Go grocery shopping',
        description: '',
        dueDate: '2023-06-30T00:00:00.000Z'
      }
    ])
    expect(generateId).toHaveBeenCalled()
  })

  test('copy todo action', () => {
    const initialState = {
      initialState: {
        todos: [
          {
            id: 'original-id',
            completed: false,
            name: 'Original Todo',
            description: '',
            dueDate: '2023-06-30T00:00:00.000Z'
          }
        ]
      }
    }
    const store = createStore(storeModel, initialState)

    store.getActions().copyTodo('original-id')

    expect(store.getState().todos).toEqual([
      {
        id: 'original-id',
        completed: false,
        name: 'Original Todo',
        description: '',
        dueDate: '2023-06-30T00:00:00.000Z'
      },
      {
        id: 'mocked-id',
        completed: false,
        name: 'Original Todo',
        description: '',
        dueDate: '2023-06-30T00:00:00.000Z'
      }
    ])

    expect(generateId).toHaveBeenCalled()
  })

  test('delete todo action', () => {
    const initialState = {
      initialState: {
        todos: [
          {
            id: 'todo-1',
            completed: false,
            name: 'Todo 1',
            description: 'Description 1',
            dueDate: '2023-06-30T00:00:00.000Z'
          },
          {
            id: 'todo-2',
            completed: true,
            name: 'Todo 2',
            description: 'Description 2',
            dueDate: '2024-06-30T00:00:00.000Z'
          }
        ]
      }
    }

    const store = createStore(storeModel, initialState)

    store.getActions().deleteTodo('todo-1')

    expect(store.getState().todos).not.toHaveProperty('id', 'todo-1')
    expect(store.getState().todos).toEqual([
      {
        id: 'todo-2',
        completed: true,
        name: 'Todo 2',
        description: 'Description 2',
        dueDate: '2024-06-30T00:00:00.000Z'
      }
    ])
  })

  test('edit todo action', () => {
    const initialState = {
      initialState: {
        todos: [
          {
            id: 'todo-1',
            completed: false,
            name: 'Old Name',
            description: 'Old Description',
            dueDate: '2023-06-30T00:00:00.000Z'
          }
        ]
      }
    }

    const store = createStore(storeModel, initialState)

    const editData = {
      id: 'todo-1',
      name: 'New Name',
      description: 'New Description',
      dueDate: '2024-07-31T00:00:00.000Z'
    }

    store.getActions().editTodo(editData)

    const editedTodo = store
      .getState()
      .todos.find((todo) => todo.id === 'todo-1')

    expect(editedTodo).toEqual({ ...editData, completed: false })
  })

  test('toggle todo status action', () => {
    const initialState = {
      initialState: {
        todos: [
          {
            id: 'todo-1',
            completed: false,
            name: 'Name 1',
            description: 'Description 1',
            dueDate: '2023-06-30T00:00:00.000Z'
          }
        ]
      }
    }

    const store = createStore(storeModel, initialState)

    store.getActions().toggleStatus('todo-1')

    const toggledTodo = store
      .getState()
      .todos.find((todo) => todo.id === 'todo-1')

    expect(toggledTodo?.completed).toBe(true)
  })
})

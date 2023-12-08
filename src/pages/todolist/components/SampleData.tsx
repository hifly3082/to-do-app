import { generateId } from '../../../utilities/helpers'

export const SampleData = [
  {
    id: generateId(),
    completed: false,
    name: 'Iron shirts',
    dueDate: '2023-06-30T04:00:00.000Z'
  },
  {
    id: generateId(),
    completed: false,
    name: 'Send applications',
    dueDate: ''
  },
  {
    id: generateId(),
    completed: true,
    name: 'Travel to the past',
    description: '...and back to the future',
    dueDate: '1965-01-01T03:00:00.000Z'
  },
  {
    id: generateId(),
    completed: false,
    name: 'Celebrate New Year',
    description: "Don't forget to send gifts",
    dueDate: '2023-12-31T04:00:00.000Z'
  }
]

import {
  generateId,
  getRandomBoolean,
  getRandomDate,
  getRandomFromArray
} from '../../../utilities/helpers'

const taskNames = [
  'Morning Routine',
  'Exercise for at least 30 minutes',
  'Check and respond to emails',
  'Prepare and enjoy a balanced meal',
  'Complete one small organizing task',
  'Take a short break and stretch',
  'Read for 20 minutes',
  'Write in a journal',
  'Connect with a friend or family member',
  'Review and plan for the next day',
  'Evening Routine',
  "Get a good night's sleep"
]

const descriptions = [
  'Deep clean a room in your home',
  'Update personal budget',
  'Declutter and donate unused items',
  'Set personal or professional goals for the month',
  'Check and update emergency preparedness kit',
  'Schedule a health check-up',
  'Backup important digital files',
  'Learn a new skill or hobby',
  'Review and update resume',
  'Plan a day for self-care',
  'Reflect on achievements and areas for improvement',
  'Monthly financial review'
]

const getRandomName = () => getRandomFromArray(taskNames)
const getRandomDescription = () => getRandomFromArray(descriptions)

export const createSampleData = (count: number) => {
  const sampleData = []

  for (let i = 0; i < count; i++) {
    sampleData.push({
      id: generateId(),
      completed: getRandomBoolean(),
      name: getRandomName(),
      description: getRandomDescription(),
      dueDate: getRandomDate()
    })
  }

  return sampleData
}

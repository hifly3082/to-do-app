import { expect, test } from 'vitest'

import { calculateCompletionPercentage } from '../utilities/helpers'
import { sampleData } from '../ui/components/todolist/sampleData'

test('calculateCompletionPercentage', () => {
  expect(calculateCompletionPercentage(sampleData)).toBe(25)
})

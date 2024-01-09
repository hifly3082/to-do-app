import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options
  })
}

export * from '@testing-library/react'
export { userEvent } from '@testing-library/user-event'
export { customRender as render }

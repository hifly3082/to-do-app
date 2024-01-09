import { screen } from '@testing-library/dom'
import { vi } from 'vitest'

import { render } from '../../test/test-utils'
import UserInfo from './UserInfo'

describe('UserInfo responsive test', () => {
  beforeAll(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    // window.matchMedia() is not implemented in JSDOM, hence we need to mock it this way:
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    })
  })

  const logout = vi.fn()

  it('renders username on `md` breakpoint', () => {
    render(<UserInfo isAuthenticated={true} logout={logout} />)

    const userName = screen.getByText('Mark Avvakumov')
    expect(userName).toBeInTheDocument()
  })

  it('renders avatar with size 30 on `md` breakpoint', () => {
    render(<UserInfo isAuthenticated={true} logout={logout} />)

    const avatar = screen.getByTestId('avatar')
    expect(avatar.getAttribute('style')).toContain('width: 30px; height: 30px')
  })
})

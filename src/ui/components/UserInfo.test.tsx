import { BrowserRouter as Router } from 'react-router-dom'
import { screen } from '@testing-library/dom'
import { vi } from 'vitest'

import { render, fireEvent } from '../../test/test-utils'
import UserInfo from './UserInfo'

describe('UserInfo test', () => {
  beforeAll(() => {
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    // window.matchMedia() is not implemented in JSDOM, hence we need to mock it this way:
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    })
  })

  const logout = vi.fn()

  it('renders with default values', () => {
    render(<UserInfo isAuthenticated={true} logout={logout} />)

    const userinfo = screen.getByTestId('userinfo')
    expect(userinfo).toBeInTheDocument()
  })

  it('does not render when not authenticated', () => {
    render(<UserInfo isAuthenticated={false} logout={logout} />)

    const userinfo = screen.queryByTestId('userinfo')
    expect(userinfo).toBeNull()
  })

  it('has a Title inside Popover', () => {
    render(
      <Router>
        <UserInfo isAuthenticated={true} logout={logout} />
      </Router>
    )

    const avatar = screen.getByTestId('avatar')
    fireEvent.click(avatar)
    const title = screen.getByTestId('title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('M. Avvakumov')
    expect(title).toHaveTextContent('Developer')
  })

  it('has a Menu inside Popover', () => {
    render(
      <Router>
        <UserInfo isAuthenticated={true} logout={logout} />
      </Router>
    )

    const avatar = screen.getByTestId('avatar')
    fireEvent.click(avatar)
    const content = screen.getByTestId('content')
    expect(content).toBeInTheDocument()
    expect(content).toHaveTextContent('Account')
    expect(content).toHaveTextContent('Logout')
  })

  it('calls logout when `Logout` button is clicked', async () => {
    render(
      <Router>
        <UserInfo isAuthenticated={true} logout={logout} />
      </Router>
    )

    const avatar = screen.getByTestId('avatar')
    fireEvent.click(avatar)
    const logoutButton = await screen.findByText('Logout')
    fireEvent.click(logoutButton)
    expect(logout).toHaveBeenCalled()
  })

  it('navigates to account page when `Account` link is clicked', () => {
    render(
      <Router>
        <UserInfo isAuthenticated={true} logout={logout} />
      </Router>
    )

    const avatar = screen.getByTestId('avatar')
    fireEvent.click(avatar)
    const accountLink = screen.getByText('Account')
    fireEvent.click(accountLink)
    expect(window.location.pathname).toBe('/account')
  })
})

import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { render } from '../../../test/test-utils'
import UserInfo from './UserInfo'

describe('Test UserInfo', () => {
  test('renders with default values', () => {
    const logout = vi.fn()
    render(<UserInfo isAuthenticated={true} logout={logout} />)
  })

  test('does not render when not authenticated', () => {
    const logout = vi.fn()
    const { container } = render(
      <UserInfo isAuthenticated={false} logout={logout} />
    )
    expect(container.firstChild).toBeNull()
  })

  test('calls logout when Logout is clicked', async () => {
    const logout = vi.fn()
    const { container, findByText } = render(
      <Router>
        <UserInfo isAuthenticated={true} logout={logout} />
      </Router>
    )
    const avatar = container.querySelector('.ant-avatar')
    if (avatar) {
      fireEvent.click(avatar)
    }
    const logoutButton = await findByText('Logout')
    fireEvent.click(logoutButton)

    expect(logout).toHaveBeenCalled()
  })
})

describe('Test responsive (breakpoint is not matched)', () => {
  Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn()
    }))
  })

  test('does not render username', () => {
    const logout = vi.fn()
    const { queryByText } = render(
      <UserInfo isAuthenticated={true} logout={logout} />
    )
    const userName = queryByText('Mark Avvakumov')
    expect(userName).not.toBeInTheDocument()
  })

  test('renders avatar with size 25', () => {
    const logout = vi.fn()
    const { container } = render(
      <UserInfo isAuthenticated={true} logout={logout} />
    )
    const avatar = container.querySelector('.ant-avatar')
    if (avatar)
      expect(avatar.getAttribute('style')).toContain(
        'width: 25px; height: 25px'
      )
  })
})

// describe('Test responsive (md breakpoint)', () => {
//   Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: vi.fn().mockImplementation((query) => ({
//       matches: true,
//       media: query,
//       addListener: vi.fn(),
//       removeListener: vi.fn()
//     }))
//   })

//   test('renders avatar with size 30', () => {
//     const logout = vi.fn()
//     const { container } = render(
//       <UserInfo isAuthenticated={true} logout={logout} />
//     )
//     const avatar = container.querySelector('.ant-avatar')
//     if (avatar)
//       expect(avatar.getAttribute('style')).toContain(
//         'width: 30px; height: 30px'
//       )
//   })
// })

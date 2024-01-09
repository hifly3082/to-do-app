import { screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent } from '../../test/test-utils'
import NavMenu from './NavMenu'

describe('NavMenu', () => {
  it('renders NavMenu component without errors', () => {
    render(
      <Router>
        <NavMenu />
      </Router>
    )
    expect(screen.getByText('To do list')).toBeInTheDocument()
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('`Todo` link works correctly', () => {
    render(
      <Router>
        <NavMenu />
      </Router>
    )

    const todoLink = screen.getByText('To do list')
    fireEvent.click(todoLink)
    expect(window.location.pathname).toBe('/todo')
  })

  it('`Account` link works correctly', () => {
    render(
      <Router>
        <NavMenu />
      </Router>
    )

    const accountLink = screen.getByText('Account')
    fireEvent.click(accountLink)
    expect(window.location.pathname).toBe('/account')
  })

  it('`About` link works correctly', () => {
    render(
      <Router>
        <NavMenu />
      </Router>
    )

    const aboutLink = screen.getByText('About')
    fireEvent.click(aboutLink)
    expect(window.location.pathname).toBe('/about')
  })
})

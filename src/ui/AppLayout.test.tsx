import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, StoreProvider } from 'easy-peasy'
import { screen } from '@testing-library/dom'
import { vi } from 'vitest'

import { storeModel } from '../store/store'
import { render } from '../test/test-utils'
import AppLayout from './AppLayout'

describe('AppLayout test', () => {
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

  it('renders with default values without errors', () => {
    const store = createStore(storeModel)
    render(
      <StoreProvider store={store}>
        <AppLayout>children</AppLayout>
      </StoreProvider>
    )

    const userinfo = screen.getByTestId('layout')
    expect(userinfo).toBeInTheDocument()
  })

  it('renders HeaderContainer/SiderContainer when authenticated', () => {
    const store = createStore(storeModel, {
      initialState: {
        isAuthenticated: true
      }
    })
    render(
      <StoreProvider store={store}>
        <Router>
          <AppLayout>children</AppLayout>
        </Router>
      </StoreProvider>
    )

    const sider = screen.getByTestId('sider')
    const header = screen.getByTestId('header')
    expect(sider).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  })
})

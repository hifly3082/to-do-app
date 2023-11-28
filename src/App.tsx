import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import { RouteNames } from './types'
import AppLayout from './ui/AppLayout'
import About from './pages/about/About'
import Account from './pages/account/Account'
import TodoListPage from './pages/todolist/TodoListPage'
import LoginPage from './pages/login/LoginPage'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <AppLayout>
          <Outlet />
        </AppLayout>
      }>
      <Route index element={<Navigate to={RouteNames.Todo} replace={true} />} />
      <Route path={RouteNames.Todo} element={<LoginPage />} />
      <Route path={RouteNames.Todo} element={<TodoListPage />} />
      <Route path={RouteNames.About} element={<About />} />
      <Route path={RouteNames.Account} element={<Account />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

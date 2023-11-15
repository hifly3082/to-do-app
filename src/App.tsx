import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import AppLayout from './ui/AppLayout'
import TodoLists from './components/TodoLists'
import About from './pages/about/About'
import Account from './pages/account/Account'
import './App.css'
import { RouteNames } from './types'
import TodoList from './pages/todolist/TodoList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={
        <AppLayout>
          <Outlet />
        </AppLayout>
      }>
      <Route index element={<Navigate to={RouteNames.Todo} replace={true} />} />
      <Route path={RouteNames.Lists} element={<TodoLists />} />
      <Route path={RouteNames.Todo} element={<TodoList />} />
      <Route path={RouteNames.About} element={<About />} />
      <Route path={RouteNames.Account} element={<Account />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

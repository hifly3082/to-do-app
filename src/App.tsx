import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import AppLayout from './ui/AppLayout'
import TodoItem from './components/TodoItem'
import AddTodoForm from './components/AddTodoForm'
import TodoLists from './components/TodoLists'
import About from './components/About'
import Account from './components/Account'
import './App.css'
import { RouteNames } from './types'

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
      <Route
        path={RouteNames.Todo}
        element={
          <>
            <AddTodoForm />
            <TodoItem />
          </>
        }
      />
      <Route path={RouteNames.About} element={<About />} />
      <Route path={RouteNames.Account} element={<Account />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <AppLayout>
          <Outlet />
        </AppLayout>
      }>
      <Route index element={<Navigate to='/todolist' replace={true} />} />
      <Route path='lists' element={<TodoLists />} />
      <Route
        path='lists/todo'
        element={
          <>
            <AddTodoForm />
            <TodoItem />
          </>
        }
      />
      <Route path='about' element={<About />} />
      <Route path='account' element={<Account />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

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
import TodosList from './components/TodosList'
import About from './components/About'
import Account from './components/Account'
import './App.css'
import AddTodoForm from './components/AddTodoForm'

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
      <Route
        path='lists'
        element={
          <>
            <AddTodoForm />
            <TodosList />
          </>
        }
      />
      <Route path='lists/todo' element={<TodoItem />} />
      <Route path='about' element={<About />} />
      <Route path='account' element={<Account />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

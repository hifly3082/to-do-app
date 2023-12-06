import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import { RouteNames } from './types'
import ProtectedRoute from './pages/ProtectedRoute'
<<<<<<< Updated upstream
import AppLayout from './ui/AppLayout'
import About from './pages/about/About'
import Account from './pages/account/Account'
import TodoListPage from './pages/todolist/TodoListPage'
import LoginPage from './pages/login/LoginPage'
import PageNotFound from './pages/PageNotFound'
import './App.css'
=======
import SpinnerFullPage from './ui/components/SpinnerFullPage'

const AppLayout = lazy(() => import('./ui/AppLayout'))
const Home = lazy(() => import('./pages/home/Home'))
const LoginPage = lazy(() => import('./pages/login/LoginPage'))
const TodoListPage = lazy(() => import('./pages/todolist/TodoListPage'))
const Account = lazy(() => import('./pages/account/Account'))
const About = lazy(() => import('./pages/about/About'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
>>>>>>> Stashed changes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <AppLayout>
          <Outlet />
        </AppLayout>
      }>
      <Route element={<ProtectedRoute />}>
        <Route path={RouteNames.Account} element={<Account />} />
        <Route path={RouteNames.Todo} element={<TodoListPage />} />
        <Route path={RouteNames.About} element={<About />} />
        <Route index element={<Navigate replace to={RouteNames.Todo} />} />
      </Route>
      <Route path={RouteNames.Login} element={<LoginPage />} />
      <Route path={RouteNames.Home} element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

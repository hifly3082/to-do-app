import { lazy, Suspense } from 'react'
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import './App.css'

import { RouteNames } from './types'
import ProtectedRoute from './pages/ProtectedRoute'
import SpinnerFullPage from './ui/components/SpinnerFullPage'

const AppLayout = lazy(() => import('./ui/AppLayout'))
const Home = lazy(() => import('./pages/home/Home'))
const LoginPage = lazy(() => import('./pages/login/LoginPage'))
const TodoListPage = lazy(() => import('./pages/todolist/TodoListPage'))
const Account = lazy(() => import('./pages/account/Account'))
const About = lazy(() => import('./pages/about/About'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/*'
      element={
        <AppLayout>
          <Suspense fallback={<SpinnerFullPage />}>
            <Outlet />
          </Suspense>
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

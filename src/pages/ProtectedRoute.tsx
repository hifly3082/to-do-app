import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStoreState } from '../store'

const ProtectedRoute = () => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/about')
    }
  }, [isAuthenticated, navigate])

  // If not authenticated, the useEffect will handle navigation, so no need to return null.
  // If authenticated, Outlet will render the child routes.
  return isAuthenticated ? <Outlet /> : null
}

export default ProtectedRoute

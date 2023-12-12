import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStoreState } from '../store'

const ProtectedRoute = () => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return isAuthenticated ? <Outlet /> : null
}

export default ProtectedRoute

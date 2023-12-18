import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStoreState } from '../store'

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useStoreState((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home')
    }
  }, [isAuthenticated, navigate])

  return isAuthenticated ? <Outlet /> : null
}

export default ProtectedRoute

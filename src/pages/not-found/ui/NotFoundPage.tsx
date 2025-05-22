import { routes } from '@/shared/configs/routes'
import { Navigate } from 'react-router-dom'

export const NotFoundPage = () => {
  return <Navigate to={routes.BASE} />
}

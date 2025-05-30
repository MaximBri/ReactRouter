import type { FC, ReactNode } from 'react'
import { useAuth } from '@/app/context/AuthProvider'
import { Navigate } from 'react-router-dom'
import { routes } from '../configs/routes'

export const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { name } = useAuth()

  if (!name) return <Navigate to={routes.LOGIN} replace/>

  return <>{children}</>
}

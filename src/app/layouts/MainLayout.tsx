import { Navbar } from '@/widgets/navbar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

import { Navbar } from '@/widgets/navbar'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  )
}

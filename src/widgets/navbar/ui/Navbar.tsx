import { Link, useLocation } from 'react-router-dom'
import { navbarList } from '../model/navbarList'
import styles from './Navbar.module.scss'
import { useAuth } from '@/app/context/AuthProvider'

export const Navbar = () => {
  const { pathname } = useLocation()

  const { name } = useAuth()

  return (
    <>
      {name && <h1 className={styles.navbar__name}>Hello, {name}</h1>}
      <nav className={styles.navbar}>
        {navbarList.map((item) => {
          if (pathname === item.path) return
          return (
            <Link to={item.path} key={item.path}>
              {item.name}
            </Link>
          )
        })}
      </nav>
    </>
  )
}

import { Link, useLocation } from 'react-router-dom'
import { navbarList } from '../model/navbarList'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className={styles.navbar}>
      {navbarList.map((item) => {
        if (pathname === item.path) return
        return <Link to={item.path}>{item.name}</Link>
      })}
    </nav>
  )
}

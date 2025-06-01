import { routes } from '@/shared/configs/routes'

export interface NavbarModel {
  path: string
  name: string
}

export const navbarList: NavbarModel[] = [
  { path: routes.BASE, name: 'Home' },
  { path: routes.CHARACTERS, name: 'Characters' },
  { path: routes.EPISODES, name: 'Episodes' },
  { path: routes.PLACES, name: 'Places' },
  { path: routes.LOGIN, name: 'Login' },
]

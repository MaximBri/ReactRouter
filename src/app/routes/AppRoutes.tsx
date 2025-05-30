import { Route, Routes } from 'react-router-dom'

import { routes } from '@/shared/configs/routes'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '@/pages/home'
import { CharactersPage } from '@/pages/characters'
import { CharacterPage } from '@/pages/character'
import { EpisodesPage } from '@/pages/episodes'
import { EpisodePage } from '@/pages/episode'
import { PlacesPage } from '@/pages/places'
import { PlacePage } from '@/pages/place'
import { NotFoundPage } from '@/pages/not-found'
import { LoginPage } from '@/pages/login'
import { PrivateRoute } from '@/shared/private-route/PrivateRoute'
import type { ReactNode } from 'react'

interface pretectedRouteModel {
  path: string
  indexElement: ReactNode
  detailElement: ReactNode
}

const protectedRoutes: pretectedRouteModel[] = [
  {
    path: routes.CHARACTERS,
    indexElement: <CharactersPage />,
    detailElement: <CharacterPage />,
  },
  {
    path: routes.EPISODES,
    indexElement: <EpisodesPage />,
    detailElement: <EpisodePage />,
  },
  {
    path: routes.PLACES,
    indexElement: <PlacesPage />,
    detailElement: <PlacePage />,
  },
]

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.BASE} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {protectedRoutes.map(({ path, indexElement, detailElement }) => (
          <Route key={path} path={path}>
            <Route
              index
              element={<PrivateRoute>{indexElement}</PrivateRoute>}
            />
            <Route
              path=':id'
              element={<PrivateRoute>{detailElement}</PrivateRoute>}
            />
          </Route>
        ))}
      </Route>
      <Route path={routes.LOGIN} element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

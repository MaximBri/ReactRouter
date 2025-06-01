import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, type ReactNode } from 'react'

import { routes } from '@/shared/configs/routes'
import { MainLayout } from '../layouts/MainLayout'
import { PrivateRoute } from '@/shared/private-route/PrivateRoute'

const HomePage = lazy(() =>
  import('@/pages/home').then((module) => ({ default: module.HomePage }))
)
const CharactersPage = lazy(() =>
  import('@/pages/characters').then((module) => ({
    default: module.CharactersPage,
  }))
)
const CharacterPage = lazy(() =>
  import('@/pages/character').then((module) => ({
    default: module.CharacterPage,
  }))
)
const EpisodesPage = lazy(() =>
  import('@/pages/episodes').then((module) => ({
    default: module.EpisodesPage,
  }))
)
const EpisodePage = lazy(() =>
  import('@/pages/episode').then((module) => ({ default: module.EpisodePage }))
)
const PlacesPage = lazy(() =>
  import('@/pages/places').then((module) => ({ default: module.PlacesPage }))
)
const PlacePage = lazy(() =>
  import('@/pages/place').then((module) => ({ default: module.PlacePage }))
)
const NotFoundPage = lazy(() =>
  import('@/pages/not-found').then((module) => ({
    default: module.NotFoundPage,
  }))
)
const LoginPage = lazy(() =>
  import('@/pages/login').then((module) => ({ default: module.LoginPage }))
)

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
      <Route
        path={routes.LOGIN}
        element={
          <Suspense fallback={'Loading...'}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={'Loading...'}>
            <NotFoundPage />
          </Suspense>
        }
      ></Route>
    </Routes>
  )
}

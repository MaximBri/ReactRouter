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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.BASE} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.CHARACTERS}>
          <Route index element={<CharactersPage />} />
          <Route path=':id' element={<CharacterPage />} />
        </Route>
        <Route path={routes.EPISODES}>
          <Route index element={<EpisodesPage />} />
          <Route path=':id' element={<EpisodePage />} />
        </Route>
        <Route path={routes.PLACES}>
          <Route index element={<PlacesPage />} />
          <Route path=':id' element={<PlacePage />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

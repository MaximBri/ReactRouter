import { useNavigate, useParams } from 'react-router-dom'
import { routes } from '@/shared/configs/routes'
import rawEpisodeList from '../../episodes/model/episode.json'
import styles from './EpisodePage.module.scss'

export const EpisodePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const episode = rawEpisodeList.find((item) => item.id === Number(id))

  if (!episode) {
    navigate(routes.BASE)
    return;
  }

  return (
    <section className={styles.episode}>
      <h2>{episode.name}</h2>
      <h3>Episode: {episode.episode}</h3>
      <h3>Air Date: {episode.air_date}</h3>
      <h3>
        Created: {new Date(episode.created).toLocaleDateString('ru-RU')}
      </h3>
    </section>
  )
}

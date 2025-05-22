import { Episode } from '@/features/eposide'
import rawEpisodesList from '../model/episode.json'
import styles from './EpisodesPage.module.scss'

export const EpisodesPage = () => {
  const episodes = rawEpisodesList.map((item) => {
    return { ...item, created: new Date(item.created) }
  })

  return (
    <section className={styles.episodes}>
      <h2 className={styles.episodes__title}>Episodes</h2>
      <ul className={styles.episodes__list}>
        {episodes.map((item) => {
          return <Episode data={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

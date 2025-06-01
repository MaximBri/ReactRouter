import { Episode } from '@/features/eposide'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import type { EpisodeModel } from '@/features/eposide/ui/Episode'
import styles from './EpisodesPage.module.scss'

export const EpisodesPage = () => {
  const { isLoading, data, lastNodeRef } = useInfiniteScroll<
    EpisodeModel,
    HTMLLIElement
  >('https://rickandmortyapi.com/api/episode')

  const episodes = data.map((item) => {
    return { ...item, created: new Date(item.created) }
  })

  return (
    <section className={styles.episodes}>
      <h2 className={styles.episodes__title}>Episodes</h2>
      <ul className={styles.episodes__list}>
        {episodes.map((item, index) => {
          return index === episodes.length - 4 ? (
            <Episode data={item} key={item.id} ref={lastNodeRef} />
          ) : (
            <Episode data={item} key={item.id} />
          )
        })}
        {isLoading && <>Loading...</>}
      </ul>
    </section>
  )
}

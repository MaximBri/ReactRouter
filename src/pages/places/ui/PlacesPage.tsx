import { Place } from '@/features/place'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import type { PlaceModel } from '@/features/place/ui/Place'
import styles from './PlacesPage.module.scss'

export const PlacesPage = () => {
  const { isLoading, data, lastNodeRef } = useInfiniteScroll<
    PlaceModel,
    HTMLLIElement
  >('https://rickandmortyapi.com/api/location')

  const places = data.map((item) => {
    return { ...item, created: new Date(item.created) }
  })

  return (
    <section className={styles.places}>
      <h2 className={styles.places__title}>Places</h2>
      <ul className={styles.places__list}>
        {places.map((item, index) => {
          return index === places.length - 4 ? (
            <Place data={item} key={item.id} ref={lastNodeRef} />
          ) : (
            <Place data={item} key={item.id} />
          )
        })}
        {isLoading && <>Loading...</>}
      </ul>
    </section>
  )
}

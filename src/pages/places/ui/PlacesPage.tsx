import { Place } from '@/features/place'
import rawPlaceList from '../model/location.json'
import styles from './PlacesPage.module.scss'

export const PlacesPage = () => {
  const places = rawPlaceList.map((item) => {
    return { ...item, created: new Date(item.created) }
  })

  return (
    <section className={styles.places}>
      <h2 className={styles.places__title}>Places</h2>
      <ul className={styles.places__list}>
        {places.map((item) => {
          return <Place data={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

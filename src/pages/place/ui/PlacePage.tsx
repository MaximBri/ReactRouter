import { useNavigate, useParams } from 'react-router-dom'
import rawPlaceList from '../../places/model/location.json'
import styles from './PlacePage.module.scss'
import { routes } from '@/shared/configs/routes'

export interface PlaceModel {
  id: number
  name: string
  type: string
  dimension: string
  created: Date
}

export const PlacePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const place = rawPlaceList.find((item) => item.id === Number(id))

  if (!place) {
    navigate(routes.BASE)
    return
  }

  return (
    <section className={styles.place}>
      <h2 className={styles.place__name}>Name: {place.name}</h2>
      <h3>Type: {place.type}</h3>
      <h3>Dimension: {place.dimension}</h3>
      <h3>Created: {new Date(place.created).toLocaleDateString('ru-RU')}</h3>
    </section>
  )
}

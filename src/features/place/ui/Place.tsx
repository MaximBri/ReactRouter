import type { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Place.module.scss'

export interface PlaceModel {
  id: number
  name: string
  type: string
  dimension: string
  created: Date
}

export const Place: FC<{
  data: PlaceModel
  ref?: (node: HTMLLIElement) => void
}> = ({ data, ref }) => {
  return (
    <li className={styles.place} ref={ref}>
      <Link to={String(data.id)}>
        <h3>{data.name}</h3>
        <h3>Type: {data.type}</h3>
        <h3>Dimension: {data.dimension}</h3>
        <h3>Created: {data.created.toLocaleDateString('ru-RU')}</h3>
      </Link>
    </li>
  )
}

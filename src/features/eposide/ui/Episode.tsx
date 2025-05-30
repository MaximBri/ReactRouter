import type { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Episode.module.scss'

export interface EpisodeModel {
  id: number
  name: string
  air_date: string
  episode: string
  created: Date
}

export const Episode: FC<{ data: EpisodeModel }> = ({ data }) => {
  return (
    <li className={styles.episode}>
      <Link to={String(data.id)}>
        <h3 className={styles.episode__name}>{data.name}</h3>
        <h4>Air Date: {data.air_date}</h4>
        <h4>Created: {data.created.toLocaleDateString('ru-RU')}</h4>
        <h4>Episode: {data.episode}</h4>
      </Link>
    </li>
  )
}

import { memo, type FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Character.module.scss'

export interface CharacterModel {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'male' | 'female' | 'unknown'
  image: string
  created: Date
}

export const Character: FC<{
  data: CharacterModel
  ref?: (node: HTMLLIElement) => void
}> = memo(({ data, ref }) => {
  return (
    <li className={styles.character} ref={ref}>
      <Link to={String(data.id)}>
        <h2 className={styles.character__name}>{data.name}</h2>
        <img
          src={data.image}
          className={`${styles.character__image} ${
            data.status === 'Dead' && styles['character--grey']
          }`}
          alt='character'
        />
        {data.type && (
          <h3 className={styles.character__type}>Type: {data.type}</h3>
        )}
        <h3 className={styles.character__gender}>Gender: {data.gender}</h3>
        <h4 className={styles.character__time}>
          Created: {data.created.toLocaleDateString('ru-RU')}
        </h4>
      </Link>
    </li>
  )
})

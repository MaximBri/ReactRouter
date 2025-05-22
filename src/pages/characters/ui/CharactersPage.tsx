import type { CharacterModel } from '@/features/character/ui/Character'
import { Character } from '@/features/character'
import rawCharacterList from '../model/characterList.json'
import styles from './CharactersPage.module.scss'

export const CharactersPage = () => {
  const characterList = rawCharacterList.map((item) => ({
    ...item,
    created: new Date(item.created),
    status: item.status as 'Alive' | 'Dead' | 'unknown',
    gender: item.gender as 'male' | 'female' | 'unknown',
  })) as CharacterModel[]

  return (
    <section className={styles.characters}>
      <h2 className={styles.characters__title}>All Characters:</h2>
      <ul className={styles.characters__list}>
        {characterList.map((item) => {
          return <Character data={item} key={item.id} />
        })}
      </ul>
    </section>
  )
}

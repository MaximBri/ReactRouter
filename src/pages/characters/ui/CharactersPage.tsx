import type { CharacterModel } from '@/features/character/ui/Character'
import { Character } from '@/features/character'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import styles from './CharactersPage.module.scss'

export const CharactersPage = () => {
  const { isLoading, data, lastNodeRef } = useInfiniteScroll<
    CharacterModel,
    HTMLLIElement
  >('https://rickandmortyapi.com/api/character')

  const characterList = data.map((item) => ({
    ...item,
    created: new Date(item.created),
    status: item.status as 'Alive' | 'Dead' | 'unknown',
    gender: item.gender as 'male' | 'female' | 'unknown',
  })) as CharacterModel[]

  return (
    <section className={styles.characters}>
      <h2 className={styles.characters__title}>All Characters:</h2>
      <ul className={styles.characters__list}>
        {characterList.map((item, index) => {
          return index === characterList.length - 4 ? (
            <Character data={item} ref={lastNodeRef} key={item.id} />
          ) : (
            <Character data={item} key={item.id} />
          )
        })}
        {isLoading && <>Loading...</>}
      </ul>
    </section>
  )
}

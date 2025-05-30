import { useNavigate, useParams } from 'react-router-dom'
import { routes } from '@/shared/configs/routes'
import rawCharacterList from '../../characters/model/characterList.json'
import styles from './CharacterPage.module.scss'

export const CharacterPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const character = rawCharacterList.find((item) => item.id === Number(id))

  if (!character) {
    navigate(routes.BASE)
    return;
  }

  return (
    <section className={styles.character}>
      <h2>Name: {character.name}</h2>
      <img
        className={styles.character__image}
        src={character.image}
        alt='character'
      />
      <h3>Status: {character.status}</h3>
      <h3>Species: {character.species}</h3>
      {character?.type && <h3>Type: {character.type}</h3>}
      <h3>Gender: {character.gender}</h3>
      <h3>
        Date of register:{' '}
        {new Date(character.created).toLocaleDateString('ru-RU')}
      </h3>
    </section>
  )
}

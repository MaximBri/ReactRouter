import { useAuth } from '@/app/context/AuthProvider'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  const { changeName } = useAuth()

  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>
        Приветствую тебя во вселенной Рика и Морти!
      </h1>
      <button onClick={() => changeName(null)}>Exit</button>
    </section>
  )
}

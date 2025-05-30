import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <section className={styles.home}>
      <h1 className={styles.home__title}>
        Приветствую тебя во вселенной Рика и Морти!
      </h1>
    </section>
  )
}

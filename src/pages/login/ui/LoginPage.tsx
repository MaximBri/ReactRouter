import { Input } from '@/features/input'
import { inputsList } from '../model/inputsList'
import { loginModel } from '../model/loginModel'
import styles from './LoginPage.module.scss'

export const LoginPage = () => {
  const {
    formRef,
    handleChange,
    handleReset,
    handleSubmit,
    inputsData,
    getError,
    name,
  } = loginModel()

  if (name) return null

  return (
    <div className={styles.signup}>
      <form
        className={styles.signup__form}
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        onReset={handleReset}
      >
        {inputsList.map((item) => {
          return (
            <Input
              name={item.key}
              value={inputsData[item.key]}
              label={item.name}
              type={item.type}
              key={item.key}
              asterisk={true}
              error={getError(item.key)}
              valueList={item.valueList}
              decorImagePath={item.decorImagePath}
            />
          )
        })}
        <button type='submit'>Отправить</button>
      </form>
    </div>
  )
}

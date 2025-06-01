import styles from './Input.module.scss'

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface InputProps {
  name: string
  value: string
  variant?: 'default' | 'filled' | 'unstyled'
  size?: sizes
  radius?: sizes
  asterisk?: boolean
  label?: string
  description?: string
  placeholder?: string
  error?: string
  type?: 'password' | 'text' | 'number' | 'radio' | 'email'
  valueList?: string[]
  decorImagePath?: string
}

export const Input = (props: InputProps) => {
  const {
    variant = 'default',
    size = 'md',
    radius = 'md',
    asterisk = false,
    label,
    description,
    error,
    type = 'text',
    value = '',
    name = '',
    placeholder,
    valueList,
    decorImagePath,
  } = props

  return (
    <label className={`${styles.label} ${styles[`label--${size}`]}`}>
      {label && (
        <h3>
          {label}
          {asterisk && <span className={styles['label--red']}> *</span>}
        </h3>
      )}
      {description && <p>{description}</p>}
      {valueList ? (
        <div className={styles.input__list}>
          {valueList.map((item, index) => {
            return (
              <div className={`${styles['input__list-item']}`} key={index}>
                {item}
                <input
                  className={`${styles[`input--${variant}`]} ${
                    styles[`label--${size}`]
                  } ${styles[`input--rounded-${radius}`]} ${
                    error ? styles.input__error : ''
                  }`}
                  type={type}
                  name={name}
                  value={item}
                  defaultChecked={value === item}
                />
              </div>
            )
          })}
        </div>
      ) : (
        <div
          className={`${styles[`input--${variant}`]} ${styles.input__wrapper} ${
            styles[`label--${size}`]
          } ${styles[`input--rounded-${radius}`]} ${
            error ? styles.input__error : ''
          }`}
        >
          {decorImagePath && (
            <img
              className={styles.input__decor}
              src={`/images/${decorImagePath}`}
              alt='decor'
            />
          )}
          <input
            className={`${styles.input} ${styles['input--transparent']}`}
            placeholder={placeholder}
            name={name}
            defaultValue={value}
            type={type}
          />
        </div>
      )}

      {error && <p className={styles.input__error}>{error}</p>}
    </label>
  )
}

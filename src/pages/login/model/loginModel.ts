import { useAuth } from '@/app/context/AuthProvider'
import { routes } from '@/shared/configs/routes'
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'

export interface SignupInputsModel {
  name: string
  nickname: string
  email: string
  sex: 'male' | 'female'
  password: string
  repeatPassword: string
}

interface ErrorModel {
  field: keyof SignupInputsModel | ''
  message: string
}

const defaultError: ErrorModel = {
  field: '',
  message: '',
}

const defaultInputsData: SignupInputsModel = {
  name: '',
  nickname: '',
  email: '',
  sex: 'male',
  password: '',
  repeatPassword: '',
}

export const loginModel = () => {
  const navigate = useNavigate()
  const { name, changeName } = useAuth()

  const formRef = useRef<HTMLFormElement>(null)

  const [error, setError] = useState<ErrorModel>(defaultError)
  const [inputsData, setInputsData] =
    useState<SignupInputsModel>(defaultInputsData)

  const handleReset = () => {
    setInputsData(defaultInputsData)
  }

  const getError = (key: string): string => {
    if (error.field === key) return error.message
    return ''
  }

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement
    setInputsData((prevData) => {
      return { ...prevData, [target.name]: target.value }
    })
  }

  const checkAllFields = (): boolean => {
    if (!inputsData.nickname) {
      setError({ field: 'nickname', message: 'Никнейм не может быть пустым' })
    } else if (!inputsData.name) {
      setError({ field: 'name', message: 'Имя не может быть пустым' })
    } else if (!inputsData.email) {
      setError({ field: 'email', message: 'Введите электронную почту' })
    } else if (!checkEmail()) {
      setError({ field: 'email', message: 'Некорректная почта' })
    } else if (!inputsData.password) {
      setError({ field: 'password', message: 'Введите пароль' })
    } else if (inputsData.password !== inputsData.repeatPassword) {
      setError({ field: 'repeatPassword', message: 'Пароли не совпадают!' })
    } else {
      setError(defaultError)
      return true
    }
    return false
  }

  const checkEmail = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(inputsData.email)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkAllFields()) {
      changeName(inputsData.name)
      formRef.current?.reset()
    }
  }

  useLayoutEffect(() => {
    if (name) {
      navigate(-1)
    }
  }, [name])

  return {
    formRef,
    handleChange,
    handleReset,
    handleSubmit,
    inputsData,
    getError,
    name,
  }
}

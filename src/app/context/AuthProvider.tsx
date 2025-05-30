import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from 'react'

const AuthContext = createContext<{
  name: string | null
  changeName: (value: string | null) => void
}>({
  name: null,
  changeName: () => {},
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string | null>(null)

  const handleChangeName = (value: string | null) => {
    setName(value)
    localStorage.setItem('name', value ?? '')
  }

  useEffect(() => {
    const storageName = localStorage.getItem('name')
    if (storageName) {
      setName(storageName)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ name, changeName: handleChangeName }}>
      {children}
    </AuthContext.Provider>
  )
}

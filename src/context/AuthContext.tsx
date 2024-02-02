import { createContext, ReactNode } from 'react'
import useCookie from '../utilities/cookies'

type providerProps = {
  children?: ReactNode
}

type AuthContextType = {
  token: string | null
  setToken: (value: string, expires_ms?: number) => void
  deleteToken: () => void
}

const initialValue = {
  token: null,
  setToken: () => {
  },
  deleteToken: () => {
  }
}

const AuthContext = createContext<AuthContextType>(initialValue)

const AuthProvider = ({ children }: providerProps) => {
  const [token, setToken, deleteToken] = useCookie('token')

  return (
    <AuthContext.Provider value={{ token, setToken, deleteToken }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

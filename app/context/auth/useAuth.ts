import { useContext } from 'react'
import authStorage from './Storage'
import AuthContext from './AuthContext'

export default function useAuth() {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('AuthContext not properly initialized')
  }

  const { user, setUser } = authContext
  const login = (user: string) => {
    setUser(user)
    authStorage.storeToken(user)
  }
  const logout = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return { user, login, logout }
}

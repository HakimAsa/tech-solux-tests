import React from 'react'

interface AuthContextType {
  user: Record<any, any> | null
  setUser: React.Dispatch<React.SetStateAction<object | null>>
}

const AuthContext = React.createContext<AuthContextType | null>({
  user: null,
  setUser: () => {},
})

export default AuthContext

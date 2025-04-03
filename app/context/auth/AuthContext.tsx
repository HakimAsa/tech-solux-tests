import React from 'react'

interface AuthContextType {
  user: string | null
  setUser: React.Dispatch<React.SetStateAction<string | null>>
}

const AuthContext = React.createContext<AuthContextType | null>({
  user: null,
  setUser: () => {},
})

export default AuthContext

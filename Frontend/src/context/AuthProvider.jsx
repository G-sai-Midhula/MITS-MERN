import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
    const user = {
        id:1,
        name:"vikraam",
        email:"vikraam17@gmail.com"
    }

  return (
    <AuthContext.Provider value={user}>
        {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider

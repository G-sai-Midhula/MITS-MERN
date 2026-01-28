import React from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
    const theme ="dark"
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        {children}


      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider

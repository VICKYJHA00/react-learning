import React, { createContext, useState } from 'react'

export const PostDataContext = createContext()

const Themecontext = ({ children }) => {
  const [Theme, setTheme] = useState('light')
  const value = { theme: Theme, setTheme }
  return (
    <PostDataContext.Provider value={value}>
      {children}
    </PostDataContext.Provider>
  )
}
 
export default Themecontext
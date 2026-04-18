import React, { useContext } from 'react'
import { PostDataContext } from '../context/Themecontext'

const Navbar = () => {
  const { theme } = useContext(PostDataContext)
  return (
    <div className='nav'>
      <h2>{theme}</h2>
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import { PostDataContext } from '../context/Themecontext'

const Nav2 = () => {
  const {theme, setTheme} = useContext(PostDataContext);
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Contact</h4>
        <h4>Theme: {theme} </h4>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  )
}

export default Nav2
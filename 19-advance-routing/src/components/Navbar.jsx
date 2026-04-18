import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800'>
      <Link to="/" className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500'>
        Vicky
      </Link>

      <div className='flex gap-6'>
        <Link 
          to="/" 
          className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}
        >
          Home
        </Link>
        <Link 
          to="/product" 
          className={`text-lg font-medium transition-colors ${isActive('/product') ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}
        >
          Product
        </Link>
        <Link 
          to="/about" 
          className={`text-lg font-medium transition-colors ${isActive('/about') ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}
        >
          About
        </Link>
        <Link 
          to="/process" 
          className={`text-lg font-medium transition-colors ${isActive('/process') ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}
        >
          Process
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Welcome Home
      </h1>
      <p className="text-xl text-gray-400 max-w-lg">
        Explore our amazing products and learn more about what we do.
      </p>
      <Link 
        to="/product" 
        className="mt-6 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 rounded-lg font-semibold transition-all"
      >
        View Products
      </Link>
    </div>
  )
}

export default Home

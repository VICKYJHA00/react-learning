import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()
  navigate('/')
  return (
    
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button className='bg-teal-500' onClick={() => navigate(-1)}>
      Go to Home
    </button>
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        About Us
      </h1>
      
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <p className="text-lg text-gray-300 mb-6">
          Welcome to our company! We are dedicated to providing the best products and services to our customers.
        </p>
        
        <p className="text-lg text-gray-300 mb-6">
          Founded in 2024, we have been committed to innovation and excellence in everything we do.
          Our team works tirelessly to ensure customer satisfaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-400">50K+</h3>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-400">100+</h3>
            <p className="text-gray-400">Products</p>
          </div>
          <div className="text-center p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-bold text-teal-400">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

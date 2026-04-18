import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
  const products = [
    { id: 1, name: 'Premium Widget', price: '$99.99', description: 'High-quality widget for all your needs' },
    { id: 2, name: 'Deluxe Gadget', price: '$149.99', description: 'Advanced gadget with premium features' },
    { id: 3, name: 'Basic Tool', price: '$49.99', description: 'Essential tool for everyday use' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Our Products
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-teal-500 transition-all hover:transform hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-teal-400">{product.price}</p>
            <button className="mt-4 w-full py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 rounded-lg font-semibold transition-all">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      <Outlet />
    </div>
  )
}

export default Product

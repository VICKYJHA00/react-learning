import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFount'
import Men from './pages/Men'
import Women from './pages/women'
import Process from './pages/Process' 
import ProcessDetailed from './pages/ProcessDetailed'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-black text-white flex flex-col'>
        <Navbar />
        
        <main className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />}>
              <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/process/:id" element={<ProcessDetailed />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
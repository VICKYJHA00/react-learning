import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

localStorage.setItem("name","vicky")

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = async () => {
    setLoading(true)
    setError(null)
    setData(null)
    
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/3')
      setData(response.data)
      console.log(response.data)
    } catch (err) {
      setError('Failed to fetch data. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1 className="title">API Data Fetcher</h1>
      
      <button className="button" onClick={getData}>
        Get Data
      </button>

      {loading && <p className="loading">Loading...</p>}
      
      {error && <p className="error">{error}</p>}
      
      {data && (
        <div className="card">
          <p className="text"><strong>ID:</strong> {data.id}</p>
          <p className="text"><strong>Title:</strong> {data.title}</p>
          <p className="text"><strong>Completed:</strong> {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  )
}

export default App

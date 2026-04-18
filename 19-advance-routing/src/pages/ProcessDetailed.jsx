import React from 'react'
import { useParams } from 'react-router-dom'
const ProcessDetailed = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Process Detailed</h1>
      <p>Process ID: {id}</p>
    </div>
  )
}

export default ProcessDetailed

import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, SetA] = useState(0)
  const [b, setb] = useState(0)

  function aChanging(){
    console.log('a is changing')
  }
  function bChanging(){
    console.log('b is changing')
  }
  useEffect(() => {
    aChanging()
  }, [a])

  useEffect(() => {
    bChanging()
  }, [b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => SetA(a + 1)}>Change A</button>
      <button onClick={() => setb(b + 1)}>Change B</button>
    </div>
  )
}

export default App

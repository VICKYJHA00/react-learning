import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [first, setfirst] = useState('HELLO')

  return (
    <div>
      <h1 id='score'>SCORE IS {num}</h1>
      <div id='btn'>
        <button onClick={() => setnum(num + 1)}>INCREMENT</button>
        <button onClick={() => setnum(num - 1)}>DECREMENT</button>
      </div>
    </div>
  )
}

export default App



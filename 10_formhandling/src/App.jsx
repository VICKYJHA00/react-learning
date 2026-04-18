// import React from 'react'

// const App = () => {
//   // const [first, setfirst] = useState(second)
//   const submithandler = (e) => {
//     e.preventDefault()
//     console.log("submit")
//   }
//   return (
//     <div>
//       <form action="" onSubmit={submithandler}>
//         <input type="text"  placeholder='Enter your name'/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState("")
  const submithandler = (e) => {
    e.preventDefault()
    // alert(`Hello ${name}`)
    console.log(name)
    setName("")
  }
  return (
    <div className="container">
      <form className="form" onSubmit={submithandler}>
        <h2>Enter Your Name</h2>
        <input 
          type="text"  
          placeholder="Enter your name"
          value= {name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
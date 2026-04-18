import React ,{useState} from 'react'

const App = () => {

  function btnclicked(){
    console.log('button is clicked');
  
  }
  function mouseEnter(){
   console.log("mouse enter");
  }
  function inputChanging(){
    console.log('input is changing');
    
  }
  return (
    <div>
        <h1>hello vicky</h1>
        <button onMouseEnter ={mouseEnter} onClick={btnclicked}>change user</button>

        <button onClick={function(){
          console.log("btn is clicked");
        }}>click ME !</button>

          <button onMouseEnter ={()=>{
            console.log("btn enter");
          }} onClick={btnclicked}>change user</button>

          <div>
            <input onChange={function(elm){
              console.log(elm.target.value);
              
            }} type="text" placeholder='Enter Name' />
          </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () =>{
    console.log("Value added", Math.random)
    // counter = counter + 1;
    if(counter<20){
      setCounter(counter  => counter+1)
      setCounter(counter  => counter+1)
      setCounter(counter  => counter+1)
      
    }else{
      alert("you exceeded the max limit")
    }
    
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("you exceeded the min limit")
    }
  }
  return (
    <>
    <h1> Chai aur Counter </h1>
    <h2> Counter value : {counter} </h2>

    <button
    onClick={addValue}> Add value 
    </button>
    <button
    onClick={removeValue}> Remove value
     </button>
    </>
  )
}

export default App

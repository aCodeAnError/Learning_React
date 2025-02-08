import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  

  const addValue =() => {
    
    console.log("value added", counter);
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("remove value", Math.random());
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <>
      <div 
      style={{backgroundColor: color}}
      className='h-screen w-full flex'>
        <div className='bg-gray-300 h-20 w-96  justify-center bottom-14' >
          <div>
            <button 
            onClick={() => setColor("red")}
            className='rounded-lg text-white gap-2'
            style={{backgroundColor: "red"}}
            >Red</button>

            <button 
            onClick={() => setColor("blue")}
            className='rounded-lg text-white gap-2 shadow-lg'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
            onClick={() => setColor("red")}
            className='rounded-lg text-white gap-2'
            style={{backgroundColor: "red"}}
            >Red</button>

            <button 
            onClick={() => setColor("blue")}
            className='rounded-lg text-white gap-2 shadow-lg'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
            onClick={() => setColor("red")}
            className='rounded-lg text-white gap-2'
            style={{backgroundColor: "red"}}
            >Red</button>

            <button 
            onClick={() => setColor("green")}
            className='rounded-lg text-white gap-2 shadow-lg'
            style={{backgroundColor: "green"}}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

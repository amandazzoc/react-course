import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Hello World React</h1>
        <p>Primeira página em React!</p>
      </div>
    </>
  )
}

export default App

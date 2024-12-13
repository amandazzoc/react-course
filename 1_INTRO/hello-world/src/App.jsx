import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import './App.css'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>Hello World React</h1>
        <p>Primeira página em React!</p>
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent />
      </div>
    </>
  )
}

export default App

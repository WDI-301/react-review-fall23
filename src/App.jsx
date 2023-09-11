import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [helloWorld, setHelloWorld] = useState('Hello World')
  
  const setHelloWorldFunc = () => {
    // alert('setHelloWorldInput')
    setHelloWorld('Hello Coders')
  }

  return (
    <>
      <h1>React Review</h1>
      <div>
        <p>{helloWorld}</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={setHelloWorldFunc}>Set Hello World</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { camelCase, capitolize } from './components/StringFunctions'


function App() {
  const [count, setCount] = useState(0)
  const [helloWorld, setHelloWorld] = useState('Hello World')
  const [inputString, setInputString] = useState('default string TestIng')
  
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
      <div className='card'>
        <h3>inputString: {inputString}</h3>
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={setHelloWorldFunc}>Set Hello World</button> */}
      <button onClick={() => setInputString(capitolize(inputString))}>Capitolize It!</button>
      <button onClick={() => camelCase(inputString, setInputString)}>camelCase IT!</button>
      </div>
    </>
  )
}

export default App

import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StringButton, { camelCase, capitolize } from './components/StringFunctions'
import StringCounter from './components/StringCounter'


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
        {/* input */}
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={setHelloWorldFunc}>Set Hello World</button> */}
      <button onClick={() => setInputString(capitolize(inputString))}>Capitolize It!</button>
      <button onClick={() => camelCase(inputString, setInputString)}>camelCase IT!</button>
      </div>

      --------------Component----------------------
      <StringCounter 
        madeUpProperty = "I made this prop"
        inputString = {inputString}
      />
      --------------Component with Switch Case ------------<br />
      <StringButton
        name = "Capitolize It!"
        inputString = {inputString}
        setInputString = {setInputString}
      />
      <StringButton 
        name = "camelCase IT!"
        inputString = {inputString}
        setInputString = {setInputString}
      />
    </>
  )
}

export default App

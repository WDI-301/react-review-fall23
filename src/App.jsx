import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StringButton, { camelCase, capitolize } from './components/StringFunctions'
import StringCounter from './components/StringCounter'
import CalcButton from './components/CalcButton'


function App() {
  const [count, setCount] = useState(0)
  const [helloWorld, setHelloWorld] = useState('Hello World')
  const [inputString, setInputString] = useState('default string TestIng')
  const [num, setNum] = useState(0)
  const [total, setTotal] = useState(0)
  
  const setHelloWorldFunc = () => {
    // alert('setHelloWorldInput')
    setHelloWorld('Hello Coders')
  }
  
  // const inputHandler = event => setInputString(event.target.value)

  let buttonArr = ['+', '-', '/', '*', 'Remainder']

  return (
    <>
      <h1>React Review</h1>
      <div>
        <p>{helloWorld}</p>
      </div>
      <div className='card'>
        <h3>inputString: {inputString}</h3>
        <input
           type='input'
           placeholder='Enter a String'
           //  onChange={inputHandler}
           onChange={event => setInputString(event.target.value)}
        />
      </div>
      <div>
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
      <br />
      ----------------Calc------------------<br />
      <h3>Total: {total}</h3>
      <input
        type='number'
        onChange={e => setNum(Number.parseInt(e.target.value))}
      /><br/>
      {/* <button onClick={() => setTotal(num + total)}>Add</button> */}
      {/* <CalcButton 
        name="+"
        num={num}
        total={total}
        setTotal={setTotal}
      />
      <CalcButton 
        name="-"
        num={num}
        total={total}
        setTotal={setTotal}
      />
      <CalcButton 
        name="*"
        num={num}
        total={total}
        setTotal={setTotal}
      />
      <CalcButton 
        name="/"
        num={num}
        total={total}
        setTotal={setTotal}
      /> */}
      {
        buttonArr.map(element =>
        <CalcButton 
          name={element}
          num={num}
          total={total}
          setTotal={setTotal}
        /> )
      }

    </>
  )
}

export default App

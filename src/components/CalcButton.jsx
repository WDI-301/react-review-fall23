import React from 'react'

const CalcButton = (props) => {
    const calculate = () => {
        switch(props.name) {
            case '+':
                return props.total + props.num
            case '-':
                return props.total - props.num
            case '*':
                return props.total * props.num
            case '/':
                return props.total / props.num
            case 'Remainder':
                return props.total % props.num
            default:
                break

        }
            
    }

  return (
    <button onClick={() => {props.setTotal(calculate())}}>{props.name}</button>
  )
}

export default CalcButton

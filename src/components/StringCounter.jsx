import React from 'react'

const StringCounter = (props) => {
    return ( 
    <>  
        <h2>String Counter! {props.madeUpProperty}</h2>
        <p>String Length is: {props.inputString.length}</p>
    </>
    )
   
}

export default StringCounter


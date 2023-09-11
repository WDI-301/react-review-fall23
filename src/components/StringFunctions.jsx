import React from 'react'

export const capitolize = (inputString) => {
    // function to capitolize a string of words
    // get the first character of each word and make it capitol
    // you can assume each word is separated by a single space - ' '
    let result = inputString.split(' ')
    
    result.forEach((e, i) => {
        result[i] = e.charAt(0).toUpperCase() + e.slice(1)
    });
    
    return result.join(' ');
    // Default String
}

export const camelCase = ( inputString, setInputString) => {
    // camelCase the inputString into one word, camelCased
    // lowerCase the first letter of first word, 
    // capitolize the rest
    // join without spaces
    // you can assume each word is separated by a single space - ' '
    let splitArr = inputString.split(' ')
    let resultArr = new Array
    resultArr.push(splitArr[0].toLowerCase())
    for (let index = 1; index < splitArr.length; index++) {
        const element = splitArr[index];
        resultArr.push(capitolize(element.toLowerCase()))
    }

    setInputString(resultArr.join(''))
    // defaultString
}

const StringFunctionalComponent = (props) => {
    // 
    const switchCaseDispatch = (params) => {
        switch (params) {
            case 'camelCase IT!':
                return camelCase(props.inputString, props.setInputString)
            case 'Capitolize It!':
                return props.setInputString(capitolize(props.inputString))
            default:
                break;
        }
    }

    return (
        <button onClick={() => switchCaseDispatch(props.name)}>{props.name}</button>
    )
}

export default StringFunctionalComponent

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


    // defaultString
}
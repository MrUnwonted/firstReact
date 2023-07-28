import React from 'react'

// function Greet(){
//     return <h1>Hello World</h1>
// }

// Using Arrow Function we can create like this
// This is named export
// export default () => {<h1>Functional Component</h1>
const Greet = (props) => {
    console.log(props);
    // Passing props as parameter from app.js
    return <h1>Hello {props.name}</h1>
}

// - This is default export
export default Greet
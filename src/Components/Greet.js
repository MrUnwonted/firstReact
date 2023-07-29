import React from 'react'


const Greet = (props) => {
    console.log(props);
    // Passing props as parameter from app.js
    return <div>
        <h1>Hello {props.name} a.k.a {props.anotherName} </h1>
        <h2> {props.children} </h2>
        <p>Say hi to them</p>
    </div>
}

// - This is default export
export default Greet





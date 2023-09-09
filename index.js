import React from 'react'
import ReactDOM from 'react-dom'

// console.log('Rajmani')

const root = ReactDOM.createRoot(document.getElementById("root"))

const heading = React.createElement("h1", {}, "Hello rajmani")

const jsxHeader = <h1 id='heading'>Namaste using JSX</h1>;

// console.log(heading)
root.render(jsxHeader)
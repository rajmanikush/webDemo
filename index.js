console.log('Rajmani')

const root = ReactDOM.createRoot(document.getElementById("root"))

const heading = React.createElement("h1", {}, "Hello rajmani")
root.render(heading)

const jsxHeader = <h1>Namaste using JSX</h1>

console.log(heading)
console.log(jsxHeader)
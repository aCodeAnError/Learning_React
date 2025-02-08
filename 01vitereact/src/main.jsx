import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const ReactElement = {

//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
const anotherUser = "rahul kumar"

const reactElement = React.createElement(
    'a',
    {   
        href: 'https://google.com',
        
    },
    'click me to visit goooogle',
    anotherUser
)

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

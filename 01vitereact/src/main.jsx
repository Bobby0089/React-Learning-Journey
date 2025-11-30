import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'

// }

const anotherUser = 'Bobby'

const anotherElement = (
  <a href="https://www.google.com" target="_blank">visit me</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' , style:{color: 'green'}},
    'click me to visit google',
    anotherUser
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // <MyApp />

  // reactElement

  // anotherElement
  <>
  <App />
  <MyApp />
  {reactElement}
  {anotherElement}
  </>
)

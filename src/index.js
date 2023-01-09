import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { UxContextProvider } from './contexts'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <UxContextProvider>
            <App />
        </UxContextProvider>
    </BrowserRouter>,
    rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

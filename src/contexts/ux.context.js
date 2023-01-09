import React, { useContext, useState, useEffect } from 'react'

const UxContext = React.createContext({
    error: [],
    message: [],
    setError: (value) => {},
    setMessage: (value) => {},
    removeError: (index) => {},
    removeMessage: (index) => {},
})

export default function UxContextProvider({ children }) {
    const [error, setError] = useState([])
    const [message, setMessage] = useState([])

    useEffect(() => {
        const errorStored = sessionStorage.getItem('error')
        if (errorStored) setError(JSON.parse(errorStored))

        const messageStored = localStorage.getItem('message')
        if (messageStored) setMessage(JSON.parse(message))

        return () => {
            sessionStorage.removeItem('error')
            sessionStorage.removeItem('message')
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('error', error)
        sessionStorage.setItem('message', message)
    }, [error, message])

    const handleError = (value) => {
        setError([...error, value])
    }

    const handleMessage = (value) => {
        setMessage([...message, value])
    }

    const removeError = (index) => {
        const copy = [...error]
        copy.splice(index, 1)

        setError(copy)
    }

    const removeMessage = (index) => {
        const copy = [...message]
        copy.splice(index, 1)

        setMessage(copy)
    }

    const setStorage = (error, message) => {
        localStorage.setItem('error', JSON.stringify(error))
        localStorage.setItem('message', JSON.stringify(message))
    }

    return (
        <UxContext.Provider
            value={{
                error: error,
                message: message,
                setError: handleError,
                setMessage: handleMessage,
                removeError: removeError,
                removeMessage: removeMessage,
            }}
        >
            {children}
        </UxContext.Provider>
    )
}

export const useUx = () => useContext(UxContext)

import React, { useContext, useState, useEffect } from 'react'
import { request } from '../api'

const types = ['admin', 'user', 'vendor', 'writer']

const AuthContext = React.createContext({
    isLogged: false,
    _id: null,
    email: '',
    firstName: '',
    lastName: '',
    type: 'user',
    token: null,
    register: (email, password, confirmPassword, firstName, lastName) => {},
    loggedIn: (email, password) => {},
    editProfil: (firstName, lastName) => {},
    request: (method, path, body, callback, contentType) => {},
})

export default function AuthContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [id, setId] = useState(null)
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [type, setType] = useState('user')
    const [token, setToken] = useState(null)

    useEffect(() => {
        return () => {}
    })

    const register = (
        email,
        password,
        confirmPassword,
        firstName,
        lastName
    ) => {
        console.log(email, password, confirmPassword, firstName, lastName)
        //TODO: Step 1 - Hash password
        //TODO: Step 2 - POST /auth/register
        //TODO: Step 3 - Message & Redirect to login
    }

    const loggedIn = (email, password) => {
        console.log(email, password)
        //TODO: Step 1 - Get password hashed
        //TODO: Step 2 - Verify password
        //TODO: Step 3 - Get token
    }

    const editProfil = (firstName, lastName) => {
        console.log(firstName, lastName)
        //TODO: POST /profil/:id
    }

    const handleRequest = async (method, path, body, callback, contentType) => {
        try {
            const data = await request(
                method,
                path,
                body,
                callback,
                contentType
            )
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

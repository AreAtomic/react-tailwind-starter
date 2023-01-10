import React, { useContext, useState, useEffect } from 'react'
import { request } from '../api'
import bcrypt from 'bcryptjs'
import { useUx } from './ux.context'

const types = ['admin', 'user', 'vendor', 'writer']

const AuthContext = React.createContext({
    isLogged: false,
    _id: null,
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    type: 'user',
    token: null,
    loading: false,
    register: (email, password, confirmPassword, firstName, lastName) => {},
    loggedIn: (email, password) => {},
    loggedOut: () => {},
    editProfil: (firstName, lastName) => {},
    request: (method, path, body, callback, contentType) => {},
})

export default function AuthContextProvider({ children }) {
    const uxContext = useUx()
    const [isLogged, setIsLogged] = useState(false)
    const [id, setId] = useState(null)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type, setType] = useState('user')
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refreshDone, setRefreshDone] = useState(false)

    useEffect(() => {
        const isLoggedStored = localStorage.getItem('isLogged')
        if (isLoggedStored) setIsLogged(isLoggedStored === 'true')

        const idStored = localStorage.getItem('id')
        if (idStored) setId(idStored)

        const emailStored = localStorage.getItem('email')
        if (emailStored) setEmail(emailStored)

        const usernameStored = localStorage.getItem('username')
        if (usernameStored) setUsername(usernameStored)

        const firstNameStored = localStorage.getItem('firstName')
        if (firstNameStored) setFirstName(firstNameStored)

        const lastNameStored = localStorage.getItem('lastName')
        if (lastNameStored) setLastName(lastNameStored)

        const typeStored = localStorage.getItem('type')
        if (typeStored) setType(typeStored)

        const tokenStored = localStorage.getItem('token')
        if (tokenStored) setToken(tokenStored)

        setRefreshDone(true)
    }, [])

    useEffect(() => {
        if (refreshDone) {
            localStorage.setItem('isLogged', isLogged)
            localStorage.setItem('id', id)
            localStorage.setItem('email', email)
            localStorage.setItem('username', username)
            localStorage.setItem('firstName', firstName)
            localStorage.setItem('lastName', lastName)
            localStorage.setItem('type', type)
            localStorage.setItem('token', token)
        }
    }, [isLogged, id, email, username, firstName, lastName, type, token])

    const register = async (
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        username
    ) => {
        setLoading(true)

        const salt = bcrypt.genSaltSync(10)
        const passwordHashed = bcrypt.hashSync(password, salt)

        const register = await handleRequest('post', 'auth/signup', {
            email: email,
            password: passwordHashed,
            firstName: firstName,
            lastName: lastName,
            username: username,
            type: 'user',
        })

        uxContext.setMessage(
            `Le compte avec l'adresse ${register.user.email} est créé, vous pouvez désomrais vous connecter.`
        )

        setLoading(false)
    }

    const loggedIn = async (email, password) => {
        setLoading(true)

        const getUser = await handleRequest('post', 'auth', { email: email })

        const paswordHashed = getUser.user.password
        const isPasswordGood = bcrypt.compareSync(password, paswordHashed)

        if (!isPasswordGood) {
            uxContext.setError('Mot de passe incorect')
            return
        }

        const getToken = await handleRequest('get', `auth/${getUser.user._id}`)
        if (getToken.token) {
            setToken(getToken.token)
            setEmail(getUser.user.email)
            setFirstName(getUser.user.firstName)
            setLastName(getUser.user.firstName)
            setUsername(getUser.user.username)
            setType(getUser.user.type)

            uxContext.setMessage(`Bonjour ${getUser.user.username}`)

            setIsLogged(true)
        }

        setLoading(false)
    }

    const loggedOut = () => {
        console.log('Logout')
        setLoading(true)

        setToken(null)
        setEmail('')
        setFirstName('')
        setLastName('')
        setUsername('')
        setType('user')
        setIsLogged(false)

        setLoading(false)
    }

    const editProfil = (firstName, lastName) => {
        console.log(firstName, lastName)
        //TODO: POST /profil/:id
    }

    const handleRequest = async (method, path, body, contentType) => {
        try {
            const response = await request(
                method,
                path,
                body,
                token,
                contentType
            )

            if (response.error) {
                throw response.data
            }

            return response.data
        } catch (error) {
            uxContext.setError(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                isLogged: isLogged,
                _id: id,
                email: email,
                username: username,
                firstName: firstName,
                lastName: lastName,
                type: type,
                token: token,
                loading: loading,
                register: register,
                loggedIn: loggedIn,
                loggedOut: loggedOut,
                editProfil: editProfil,
                request: request,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

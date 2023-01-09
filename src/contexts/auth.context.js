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

    useEffect(() => {
        const isLoggedStored = sessionStorage.getItem('isLogged')
        if (isLoggedStored) setIsLogged(isLoggedStored)

        const idStored = sessionStorage.getItem('id')
        if (idStored) setIsLogged(idStored)

        const emailStored = sessionStorage.getItem('email')
        if (emailStored) setIsLogged(emailStored)

        const usernameStored = sessionStorage.getItem('username')
        if (usernameStored) setIsLogged(usernameStored)

        const firstNameStored = sessionStorage.getItem('firstName')
        if (firstNameStored) setIsLogged(firstNameStored)

        const lastNameStored = sessionStorage.getItem('lastName')
        if (lastNameStored) setIsLogged(lastNameStored)

        const typeStored = sessionStorage.getItem('type')
        if (typeStored) setIsLogged(typeStored)

        const tokenStored = sessionStorage.getItem('token')
        if (tokenStored) setIsLogged(tokenStored)
    }, [])

    useEffect(() => {
        sessionStorage.setItem('isLogged', isLogged)
        sessionStorage.setItem('id', id)
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('username', username)
        sessionStorage.setItem('firstName', firstName)
        sessionStorage.setItem('lastName', lastName)
        sessionStorage.setItem('type', type)
        sessionStorage.setItem('token', token)
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
                editProfil: editProfil,
                request: request,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

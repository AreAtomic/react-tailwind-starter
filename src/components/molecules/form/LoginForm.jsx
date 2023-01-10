import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { ButtonPrimary, HeadingThree } from '../../atoms'
import { Input } from '../../atoms'

import { useAuth, useUx } from '../../../contexts'
import { isEmail, isPasswordValid } from '../../../utils'

const LoginForm = (login) => {
    const navigate = useNavigate()
    const authContext = useAuth()
    const uxContext = useUx()

    useEffect(() => {
        if(authContext.isLogged === true){
            navigate("/accueil")
        }
    }, [authContext])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="mb-40">
            <div className="grid gap-5 mt-5">
                <Link to="/" className="flex">
                    <i className="material-icons left mr-1">
                        keyboard_backspace
                    </i>{' '}
                    Retour à l'accueil
                </Link>
                <div className="mt-3">
                    <HeadingThree>
                        <b>Connexion</b>{' '}
                    </HeadingThree>
                </div>
                <div className="grid gap-2">
                    <Input.Email
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input.Password
                        label="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <ButtonPrimary
                        type="submit"
                        onClick={() => {
                            if (isEmail(email)) {
                                if (isPasswordValid(password)) {
                                    authContext.loggedIn(email, password)
                                } else {
                                    uxContext.setError(
                                        'Veuillez entrer un mot de passe de plus de 9 caractères'
                                    )
                                }
                            } else {
                                uxContext.setError(
                                    'Veuillez rentrer un email valide'
                                )
                            }
                        }}
                        loading={authContext.loading}
                    >
                        Connexion
                    </ButtonPrimary>
                    <p className="text-gray-600 pt-2">
                        Pas encore inscrit?{' '}
                        <Link
                            to="/register"
                            className="text-purple-areatomic-500"
                        >
                            S'inscrire
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm

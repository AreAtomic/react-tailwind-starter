import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { ButtonPrimary, HeadingThree } from '../../atoms'

const LoginForm = (login) => {
    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container" style={{ height: '500px' }}>
            <div className="row mt-5">
                <div>
                    <Link to="/">
                        <i className="material-icons left">
                            keyboard_backspace
                        </i>{' '}
                        Retour à l'accueil
                    </Link>
                    <div className="mt-3">
                        <HeadingThree>
                            <b>Connexion</b>{' '}
                        </HeadingThree>
                    </div>
                    <div></div>
                    <div>
                        <ButtonPrimary type="submit">Connexion</ButtonPrimary>
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
        </div>
    )
}

export default LoginForm

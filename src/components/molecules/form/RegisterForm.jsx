import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { ButtonPrimary, HeadingThree, Input } from '../../atoms'

import { useAuth, useUx } from '../../../contexts'
import { isEmail, isPasswordValid } from '../../../utils'

const RegisterForm = (register) => {
    const authContext = useAuth()
    const uxContext = useUx()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

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
                        <b>Inscription</b>{' '}
                    </HeadingThree>
                </div>
                <div className="grid gap-2">
                    <Input.Text
                        label="Prénom"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                    />
                    <Input.Text
                        label="Nom"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                    />
                    <Input.Text
                        label="Nom d'utilisateur"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
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
                    <Input.Password
                        label="Confirmation mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <ButtonPrimary
                        type="submit"
                        onClick={() => {
                            if (isEmail(email)) {
                                if (isPasswordValid(password)) {
                                    if (password === confirmPassword) {
                                        if (
                                            firstName !== '' &&
                                            lastName !== ''
                                        ) {
                                            authContext.register(
                                                email,
                                                password,
                                                confirmPassword,
                                                firstName,
                                                lastName,
                                                username
                                            )
                                        } else {
                                            uxContext.setError(
                                                'Veuillez renseigner votre nom et votre prénom'
                                            )
                                        }
                                    } else {
                                        uxContext.setError(
                                            'Les mots de passe ne sont pas les mêmes'
                                        )
                                    }
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
                    >
                        Inscription
                    </ButtonPrimary>
                    <p className="grey-text text-darken-1 pt-2">
                        Déjà isncrit?{' '}
                        <Link to="/login" className="text-purple-areatomic-500">
                            Se connecter
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm

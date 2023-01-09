import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classnames from 'classnames'
import { ButtonPrimary, HeadingThree } from '../../atoms'

const RegisterForm = (register) => {
    let navigate = useNavigate()

    return (
        <div className="container " style={{ height: '500px' }}>
            <div className="row mt-5">
                <div>
                    <Link to="/" className="waves-effect">
                        <i className="material-icons left">
                            keyboard_backspace
                        </i>{' '}
                        Retour à l'accueil
                    </Link>
                    <div className="mt-3">
                        <HeadingThree>
                            <b>Inscription</b>{' '}
                        </HeadingThree>
                    </div>
                    <div></div>
                    <div>
                        <ButtonPrimary type="submit">Inscription</ButtonPrimary>
                        <p className="grey-text text-darken-1 pt-2">
                            Déjà isncrit?{' '}
                            <Link
                                to="/login"
                                className="text-purple-areatomic-500"
                            >
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm

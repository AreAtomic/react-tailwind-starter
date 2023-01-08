import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authAction'
import classnames from 'classnames'
import { ButtonPrimary, HeadingThree } from '../../atoms'

const LoginForm = (login) => {
    let navigate = useNavigate()
    useEffect(() => {
        const componentDidMount = () => {
            // If logged in and user navigates to Login page, should redirect them to dashboard
            if (login.auth.isAuthenticated) {
                navigate('/dashboard')
            }
        }
        componentDidMount()
    })

    const [inputValues, setInputValues] = useState({})
    const [error, setError] = useState({})

    const componentWillReceiveProps = () => {
        if (login.auth.isAuthenticated) {
            navigate('/dashboard') // push user to dashboard when they login
        }
        if (login.errors) {
            setError({
                error: login.errors,
            })
        }
    }

    const onChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setInputValues((values) => ({ ...values, [id]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: inputValues.email,
            password: inputValues.password,
        }
        login.loginUser(userData) // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
        componentWillReceiveProps()
    }

    return (
        <div className="container" style={{ height: '500px' }}>
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
                            <b>Connexion</b>{' '}
                        </HeadingThree>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={onChange}
                                value={inputValues.email || ''}
                                error={login.errors}
                                id="email"
                                type="email"
                                className={classnames('', {
                                    invalid:
                                        login.errors.email ||
                                        login.errors.emailnotfound,
                                })}
                            />
                            <span className="red-text">
                                {login.errors.email}
                                {login.errors.emailnotfound}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={onChange}
                                value={inputValues.password || ''}
                                error={login.errors.error}
                                id="password"
                                type="password"
                                className={classnames('', {
                                    invalid:
                                        login.errors.password ||
                                        login.errors.passwordincorrect,
                                })}
                            />
                            <span className="red-text">
                                {login.errors.password}
                                {login.errors.passwordincorrect}
                            </span>
                        </div>
                        <div>
                            <ButtonPrimary type="submit">
                                Connexion
                            </ButtonPrimary>
                            <p className="grey-text text-darken-1 pt-2">
                                Pas encore inscrit?{' '}
                                <Link
                                    to="/register"
                                    className="text-purple-areatomic-500"
                                >
                                    S'inscrire
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
})

export default connect(mapStateToProps, { loginUser })(LoginForm)

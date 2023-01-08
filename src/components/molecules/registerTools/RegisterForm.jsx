import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authAction'
import classnames from 'classnames'
import { ButtonPrimary, HeadingThree } from '../../atoms'

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return <Component {...props} router={{ location, navigate, params }} />
    }

    return ComponentWithRouterProp
}

const RegisterForm = (register) => {
    const [inputValues, setInputValues] = useState({})
    const [error, setError] = useState({})
    let navigate = useNavigate()

    useEffect(() => {
        const componentDidMount = () => {
            // If logged in and user navigates to Login page, should redirect them to dashboard
            if (register.auth.isAuthenticated) {
                navigate('/dashboard')
            }
        }
        componentDidMount()
    })

    const componentWillReceiveProps = () => {
        if (register.errors) {
            setError({
                error: register.errors,
            })
        }
    }

    const onChange = (e) => {
        e.preventDefault()
        const id = e.target.id
        const value = e.target.value
        setInputValues((values) => ({ ...values, [id]: value }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(register)

        const newUser = {
            name: inputValues.name,
            email: inputValues.email,
            password: inputValues.password,
            password2: inputValues.password2,
        }
        register.registerUser(newUser, navigate('/login'))
        componentWillReceiveProps()
    }

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
                    <form noValidate onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={onChange}
                                value={inputValues.name || ''}
                                error={register.errors}
                                id="name"
                                type="text"
                                className={classnames('', {
                                    invalid: register.errors.name,
                                })}
                            />
                            <span className="red-text">
                                {register.errors.name}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={onChange}
                                value={inputValues.email || ''}
                                error={register.errors}
                                id="email"
                                type="email"
                                className={classnames('', {
                                    invalid: register.errors.email,
                                })}
                            />
                            <span className="red-text">
                                {register.errors.email}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={onChange}
                                value={inputValues.password || ''}
                                error={register.errors}
                                id="password"
                                type="password"
                                className={classnames('', {
                                    invalid: register.errors.password,
                                })}
                            />
                            <span className="red-text">
                                {register.errors.password}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="password2">Confirm Password</label>
                            <input
                                onChange={onChange}
                                value={inputValues.password2 || ''}
                                error={register.errors}
                                id="password2"
                                type="password"
                                className={classnames('', {
                                    invalid: register.errors.password2,
                                })}
                            />
                            <span className="red-text">
                                {register.errors.password2}
                            </span>
                        </div>
                        <div>
                            <ButtonPrimary type="submit">
                                Inscription
                            </ButtonPrimary>
                            <p className="grey-text text-darken-1 pt-2">
                                Déjà isncrit?{' '}
                                <Link to="/login" className='text-purple-areatomic-500'>Se connecter</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
RegisterForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
})

export default connect(mapStateToProps, { registerUser })(
    withRouter(RegisterForm)
)

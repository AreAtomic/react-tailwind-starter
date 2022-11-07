import React, { useState } from 'react'
import { Link,useLocation, useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authAction'
import classnames from 'classnames'

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

    const componentDidMount=()=> {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (register.auth.isAuthenticated) {
          navigate("/dashboard");
        }
      }
      componentDidMount()
    
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
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">
                            keyboard_backspace
                        </i>{' '}
                        Back to home
                    </Link>
                    <div
                        className="col s12"
                        style={{ paddingLeft: '11.250px' }}
                    >
                        <h4>
                            <b>Register</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Already have an account?{' '}
                            <Link to="/login">Log in</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={inputValues.name || ''}
                                error={register.errors}
                                id="name"
                                type="text"
                                className={classnames('', {
                                    invalid:
                                        register.errors.name,
                                })}
                            />
                            <label htmlFor="name">Name</label>
                            <span className="red-text">
                                {register.errors.name}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={inputValues.email || ''}
                                error={register.errors}
                                id="email"
                                type="email"
                                className={classnames('', {
                                    invalid:
                                    register.errors.email,
                                })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                                {register.errors.email}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={inputValues.password || ''}
                                error={register.errors}
                                id="password"
                                type="password"
                                className={classnames('', {
                                    invalid:
                                    register.errors.password,
                                })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                                {register.errors.password}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={inputValues.password2 || ''}
                                error={register.errors}
                                id="password2"
                                type="password"
                                className={classnames('', {
                                    invalid:
                                    register.errors.password2,
                                })}
                            />
                            <label htmlFor="password2">Confirm Password</label>
                            <span className="red-text">
                                {register.errors.password2}
                            </span>
                        </div>
                        <div
                            className="col s12"
                            style={{ paddingLeft: '11.250px' }}
                        >
                            <button
                                style={{
                                    width: '150px',
                                    borderRadius: '3px',
                                    letterSpacing: '1.5px',
                                    marginTop: '1rem',
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Sign up
                            </button>
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

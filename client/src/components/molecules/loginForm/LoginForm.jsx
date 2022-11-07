import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authAction'
import classnames from 'classnames'

const LoginForm = () => {
    const [errors,setError] = useState('');
    const [inputValues, setInputValues] = useState({});

    const componentWillReceiveProps = (nextProps) => {
        console.log(nextProps)
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard') // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setError({
                errors: nextProps.errors,
            })
        }
    }

    const onChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setInputValues(values => ({...values, [id]: value}))
        
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: inputValues.email,
            password: inputValues.password,
        }
        loginUser(userData) // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    return (
        <div className="container">
            <div style={{ marginTop: '4rem' }} className="row">
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
                            <b>Login</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account?{' '}
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={inputValues.email||""}
                                error={errors.error}
                                id="email"
                                type="email"
                                className={classnames('', {
                                    invalid:
                                    errors.email || errors.emailnotfound,
                                })
                            }
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={inputValues.password||""}
                                error={errors.error}
                                id="password"
                                type="password"
                                className={classnames('', {
                                    invalid:
                                    errors.password ||
                                    errors.passwordincorrect,
                                })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
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
                                Login
                            </button>
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

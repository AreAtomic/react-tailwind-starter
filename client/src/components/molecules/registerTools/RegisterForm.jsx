import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authAction'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [errors,setError] = useState('');

    
    const componentWillReceiveProps = (nextProps) => {
        if (nextProps.errors) {
            this.setError({
                errors: nextProps.errors,
            })
        }
    }

    const onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.id]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            name: name,
            email: email,
            password: password,
            confirmedPassword: confirmedPassword,
        }
        this.props.registerUser(newUser, this.props.history)

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
                                value={(e) => setName(e.target.value)}
                                error={(e) => setError(e.target.value)}
                                id="name"
                                type="text"
                                className={classnames('', {
                                    invalid:
                                        errors.name,
                                })}
                            />
                            <label htmlFor="name">Name</label>
                            <span className="red-text">
                                {errors.name}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={(e) => setEmail(e.target.value)}
                                error={(e) => setError(e.target.value)}
                                id="email"
                                type="email"
                                className={classnames('', {
                                    invalid:
                                        errors.email,
                                })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                                {errors.email}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={(e) => setPassword(e.target.value)}
                                error={(e) => setError(e.target.value)}
                                id="password"
                                type="password"
                                className={classnames('', {
                                    invalid:
                                        errors
                                            .password,
                                })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                                {errors.password}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onChange}
                                value={setConfirmedPassword}
                                error={(e) => setError(e.target.value)}
                                id="password2"
                                type="password"
                                className={classnames('', {
                                    invalid:
                                        errors
                                            .password2,
                                })}
                            />
                            <label htmlFor="password2">Confirm Password</label>
                            <span className="red-text">
                                {errors.password2}
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

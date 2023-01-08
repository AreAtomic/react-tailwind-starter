import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'

const proxy = process.env.REACT_APP_PROXY

export const registerUser = (userData, history) => (dispatch) => {
    axios
        .post(`${proxy}/api/users/register`, userData)
        .then((res) => history.push('/login'))
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        )
}

export const loginUser = (userData) => (dispatch) => {
    axios
        .post(`${proxy}/api/users/login`, userData)
        .then((res) => {
            const { token } = res.data
            const decoded = jwt_decode(token)

            localStorage.setItem('jwtToken', token)
            setAuthToken(token)

            dispatch(setCurrentUser(decoded))
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        )
}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    }
}

export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    }
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}

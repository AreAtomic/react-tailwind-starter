import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { DashboardPage } from '../../../pages'

const PrivateRoute = ({ auth, props }) => {
  console.log(auth.isAuthenticated)
    return auth.isAuthenticated === true ? (
        <DashboardPage />
    ) : (
        <Navigate to="/login" />
    )
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
})
export default connect(mapStateToProps)(PrivateRoute)

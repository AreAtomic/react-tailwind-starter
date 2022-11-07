import React from 'react'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import {
    Build,
    Home,
    Produits,
    Articles,
    Services,
    Register,
    Login,
    DashboardPage
} from './pages'
import PrivateRoute from "./components/molecules/private-route/PrivateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import { Provider } from 'react-redux'
import store from './store'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="app">
            <Routes>
                <Route path="/" element={<Home /> }  />
                <Route path="/accueil" element={<Home />}  />
                <Route path="/produits" element={<Produits /> } />
                <Route path="/articles" element={<Articles />} />
                <Route path="/services" element={<Services />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />}  />
                <Route path="/dashboard" element={
                    <PrivateRoute />} 
                />
                <Route path="/build" element={<Build  />} />
            </Routes >
        </div>

        </BrowserRouter>
        </Provider>
    );
    
}

export default App;

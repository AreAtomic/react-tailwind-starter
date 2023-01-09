import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Build, Home, Services, Register, Login } from './pages'
import { useUx, AuthContextProvider, useAuth } from './contexts'

const Router = () => {
    const uxContext = useUx()
    const authContext = useAuth()

    return (
        <div className='relative'>
            <div className="absolute">
                
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accueil" element={<Home />} />
                {/* <Route path="/produits" element={<Produits />} />
                <Route path="/articles" element={<Articles />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/build" element={<Build />} /> */}
            </Routes>
        </div>
    )
}

const App = () => {
    return (
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    )
}

export default App

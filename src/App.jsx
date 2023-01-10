import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Build, Home, Services, Register, Login } from './pages'
import { useUx, AuthContextProvider, useAuth } from './contexts'

const Router = () => {
    const uxContext = useUx()
    const authContext = useAuth()

    return (
        <div className="relative">
            <div className="fixed w-screenAbsolute grid gap-2 justify-center pt-2 z-50">
                {uxContext.error.length !== 0 &&
                    uxContext.error.map((error, index) => (
                        <div className="grid grid-cols-12 w-screen p-3 max-w-card md:max-w-sm bg-red-300 border border-red-500">
                            <div className="col-span-11">{error}</div>
                            <div
                                className="material-icons left"
                                onClick={() => {
                                    uxContext.removeError(index)
                                }}
                            >
                                close
                            </div>
                        </div>
                    ))}

                {uxContext.message.length !== 0 &&
                    uxContext.message.map((message, index) => (
                        <div className="grid grid-cols-12 w-screen p-3 max-w-card md:max-w-sm bg-green-300 border border-green-500">
                            <div className="col-span-11">{message}</div>
                            <div
                                className="material-icons left"
                                onClick={() => {
                                    uxContext.removeMessage(index)
                                }}
                            >
                                close
                            </div>
                        </div>
                    ))}
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

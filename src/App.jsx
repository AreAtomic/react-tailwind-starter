import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Build, Home, Produits, Articles, Services, Connexion } from './pages'

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/services" element={<Services />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/build" element={<Build />} />
            </Routes>
        </div>
    )
}

export default App

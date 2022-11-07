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
} from './pages'


function App() {
    return (
        <BrowserRouter>
            <div className="app">
            <Routes>
                <Route path="/" element={<Home  script={console.log("ici")}/> }  />
                <Route path="/accueil" element={<Home />}  />
                <Route path="/produits" element={<Produits /> } />
                <Route path="/articles" element={<Articles />} />
                <Route path="/services" element={<Services />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />}  />
                <Route path="/build" element={<Build  script={console.log("bla")} />} />
            </Routes >
        </div>

        </BrowserRouter>
        
    );
    
}

export default App;
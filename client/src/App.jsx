import React from 'react'
import { Route,BrowserRouter,Switch } from 'react-router-dom'
import {
    Build,
    Home,
    Produits,
    Articles,
    Services,
    Register,
    Login,
} from './pages'
import { Provider } from 'react-redux'
import store from './store'


function App() {
    return (
        <Provider store={store} script={console.log('je suis là')}>
        <BrowserRouter script={console.log('je suis ici')}>
        <div className="app" script={console.log('je suis pas loin')}>
            <Switch script={console.log('mais calllccccccc')}>
                <Route exact path="/" element={<Home />} script={console.log('je suis plus très loin')} />
                <Route exact path="/accueil" element={<Home />} script={console.log('mais wsh')} />
                <Route exact path="/produits" element={<Produits /> } script={console.log('mais fezr')} />
                <Route exact path="/articles" element={<Articles />} script={console.log('mais wf"rf"h')}/>
                <Route exact path="/services" element={<Services />} script={console.log('mais éféf')}/>
                <Route exact path="/register" element={<Register />} script={console.log('mais f"rf"édéd')}/>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/build" element={<Build />} />
            </Switch >
        </div>
        </BrowserRouter>
    </Provider>
    )
    
}

export default App

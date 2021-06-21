import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Details from './pages/Details'
import Profile from './pages/Profile'

function Routes () {
    const authenticated = localStorage.getItem('@user')
    
    return(
        <BrowserRouter>
            <Switch>
                {!authenticated && <Route path="/" exact component={Login} />}
                {authenticated && <Route path="/" exact component={Home} />}
                <Route path="/details/:id" component={Details} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
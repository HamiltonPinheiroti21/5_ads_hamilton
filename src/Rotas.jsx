import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './pages/home'
import Login from './pages/login'
import Entrada from './pages/entrada'
import Saida from './pages/saida'
import Sair from './pages/sair'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter } from 'react-router-dom'

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/entrada" component={Entrada} />
            <PrivateRoute exact path="/saida" component={Saida} />
            <PrivateRoute exact path="/sair" component={Sair} />
            <Route component="/login" />
        </Switch>
    </BrowserRouter>
)

export default Rotas
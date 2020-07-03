import React from 'react'
import { Logado } from './Auth'

import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        Logado() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
    }
    />
)

export default PrivateRoute
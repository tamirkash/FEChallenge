import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, logged, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                logged ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        />
    )
}

export default PrivateRoute;
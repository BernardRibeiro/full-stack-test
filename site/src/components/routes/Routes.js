import React, { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Context } from '../context/AuthContext';

import Main from '../main/Main';
import Login from '../login/Login';
import Punk from '../punk/Punk';

const PrivateRoute = ({ component: Component, ...rest }) => {   
    const { authenticated } = useContext(Context);

    return (
        <Route
            {...rest}
            render={ props =>
                authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
            }
        />
    );
};

function Routes() {
    return (
        <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/login" exact={true} component={Login} />          
            <PrivateRoute path="/punk" component={Punk} />
        </Switch>
    )
};

export default Routes;
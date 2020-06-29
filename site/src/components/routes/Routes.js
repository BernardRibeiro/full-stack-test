import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Context } from '../context/AuthContext';

import Home from '../home/Home';
import Login from '../login/Login';
import Logout from '../login/Logout';
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
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" exact={true} component={Login} />          
            <Route path="/logout" exact={true} component={Logout} />          
            <PrivateRoute path="/punk" component={Punk} />
        </Switch>
    )
};

export default Routes;
import React, { createContext } from 'react';

import useAuth from '../context/hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
    const {
        authenticated, handleLogin, handleLogout,
    } = useAuth();

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );  
}

export { Context, AuthProvider };
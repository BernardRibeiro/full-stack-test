import { useState, useEffect } from 'react';
import api from '../../common/api';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

    }, [authenticated]);
  
    function handleLogin(token) {
        localStorage.setItem('token', JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setAuthenticated(true);
    }

    function handleLogout() {
        setAuthenticated(false);

        localStorage.removeItem('token');

        api.defaults.headers.Authorization = undefined;
    }
  
    return { authenticated, handleLogin, handleLogout };
}
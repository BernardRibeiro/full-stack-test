import { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import api from '../../common/api';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    let history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

    }, [authenticated]);
  
    async function handleLogin(user) {
        const { email, password } = user;
        const { data: { token } } = await api.post('/authenticate', { email, password });

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;

        setAuthenticated(true);

        history.push("/punk");
    }

    function handleLogout() {
        setAuthenticated(false);

        localStorage.removeItem('token');

        api.defaults.headers.Authorization = undefined;
        
        history.push('/login');
    }
  
    return { authenticated, handleLogin, handleLogout };
}
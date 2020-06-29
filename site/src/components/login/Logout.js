import React, { useEffect, useContext } from 'react';
import { Context } from '../context/AuthContext';

export default function Logout({ history }) {
    const { handleLogout } = useContext(Context);

    useEffect(() => {
        handleLogout()
            .then(() => {
                history.push('/punk');
            });
    }, [])

    return (
        <></>
    );
}
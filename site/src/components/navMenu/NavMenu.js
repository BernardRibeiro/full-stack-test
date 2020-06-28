import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/punk">Punk API</Link>
                </li>
            </ul>
        </div>
    );
}
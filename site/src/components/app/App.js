import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '../context/AuthContext';
import NavMenu from '../navMenu/NavMenu'
import Routes from '../routes/Routes'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavMenu></NavMenu>
                <Routes></Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

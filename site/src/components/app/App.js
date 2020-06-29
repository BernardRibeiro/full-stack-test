import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { AuthProvider } from '../context/AuthContext';
import NavMenu from '../navmenu/NavMenu';
import Routes from '../routes/Routes';

import './style.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavMenu></NavMenu>
                <Container className="main">
                    <Routes></Routes>
                </Container>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../context/AuthContext';

export default function NavMenu() {
    const { authenticated, handleLogout } = useContext(Context);

    const handleSelect = async function(action) {
        if (action === 'logout') {
            await handleLogout();
        }
    };
    
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">MyTapp</Navbar.Brand>
            <Nav className="mr-auto" activeKey="/">
                <Nav.Link as={Link} to="/">Home</Nav.Link>                
                <Nav.Link as={Link} to="/punk">Punk</Nav.Link>
            </Nav>
            <Nav className="mr-2" onSelect={(selectedKey) => handleSelect(selectedKey)}>
                {
                    authenticated
                    ? <Nav.Link eventKey="logout" className="">Sair</Nav.Link>
                    : <Nav.Link as={Link} to="/login" className="">Acessar</Nav.Link>
                }
            </Nav>
        </Navbar>
    );
}
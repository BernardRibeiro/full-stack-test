import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import useAuth from '../context/hooks/useAuth';

export default function Login() {
    const { handleLogin } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        var data = {
            email,
            password
        };

        await handleLogin(data);
    };

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={event => setPassword(event.target.value)}                        
                    />
                    <button type="submit">Entrar</button>
                </Form>
            </Container>
        </>
    );
}
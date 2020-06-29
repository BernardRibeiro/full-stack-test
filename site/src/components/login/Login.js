import React, { useState, useContext } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { Context } from '../context/AuthContext';
import api from '../common/api';

import './login.css';

export default function Login({ history }) {
    const { handleLogin } = useContext(Context);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');   

    const handleSubmit = async event => {
        event.preventDefault();
        setErrorMessage('');

        api
            .post('/authenticate', { email, password })
            .then(response => {
                const { error } = response.data;
                
                if (error)
                    setErrorMessage(error);
                else {
                    const { token } = response.data;
                    
                    handleLogin(token);

                    history.push('/punk');
                }
            })
            
            .catch( (response) => {
                setErrorMessage("Erro ao realizar operação" + response);
            });
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Form onSubmit={handleSubmit}>
                    <Form.Text className="error-message">
                        { errorMessage }
                    </Form.Text>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" placeholder="Entre email" 
                            onChange={event => setEmail(event.target.value)}
                        />                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            onChange={event => setPassword(event.target.value)} 
                            placeholder="Password" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
            </Row>
        </Container>
    );
}
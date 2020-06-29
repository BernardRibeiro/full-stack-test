import React, { useState, useEffect } from 'react';
import { Container, Table, Pagination, Row, Col, Form } from 'react-bootstrap';
import api from '../common/api';

export default function Punk() {

    const [ loading, setLoading ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ perPage, setPerPage ] = useState(10);
    const [ beers, setBeers ] = useState([]);

    const getBeers = async function() {
        const url = `/punk/${page}/${perPage}`;
        const itens = await api.get(url);

        setBeers(itens.data.rows);

        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        
        getBeers();
    }, [page, perPage]);

    const listContent = function() {
        return loading || beers.length === 0 
            ?   <tr>
                    <td colSpan="3" className="text-center">{loading ? 'Pesquisando' : 'Sem Registros'}</td>
                </tr> 
            :   beers.map(beer =>
                    <tr key={beer.id}>
                        <td>{beer.id}</td>
                        <td>{beer.name}</td>
                        <td>{beer.description}</td>
                    </tr>
            )
    }

    return (
        <Container>
            <Row>
                <Col xs sm lg="2">
                    <Form.Group controlId="perPageSelect" >
                        <Form.Control as="select" onChange={event => setPerPage(event.target.value)} defaultValue="perPage" >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="mt-10">
                    Itens por página
                </Col>
                <Col>
                    <Pagination className="float-right"> 
                        <Pagination.Prev onClick={() => setPage(page -1)} disabled={page === 1}>Anterior</Pagination.Prev>
                        <Pagination.Item>{page}</Pagination.Item>
                        <Pagination.Next onClick={() => setPage(page +1)} disabled={beers.length === 0}>Próximo</Pagination.Next>
                    </Pagination>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    { listContent() }
                </tbody>
            </Table>
        </Container>
    );
}
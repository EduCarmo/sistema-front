import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cadastrar() {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 h-100">
        <Col md={8} className="d-none d-md-flex d-flex flex-column align-items-center justify-content-center text-center h-100">
          <h1 className="titulo-inovamed mb-3 text-primary">Seja bem Vindo</h1>
          
          <img className="logo mb-5" src="https://via.placeholder.com/150" alt="Logo Temporária" style={{width: '50%' ,maxWidth: '400px' }} />
        </Col>

        <Col md={4} className="d-flex flex-column align-items-center justify-content-center bg-white p-4 shadow-sm rounded h-100">
          <h2 className="mb-4 text-primary">Nome do Sistema</h2>
          <Form className="w-100">
          <Form.Group className="mb-4" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                required
                type="text" 
                placeholder="Digite seu nome" 
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                required
                type="email" 
                placeholder="Digite seu email" 
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
                required
                type="password" 
                placeholder="Digite sua senha" 
              />
            </Form.Group>
            <div className="btn-wrapper mt-4 d-flex flex-column gap-4">
              <Button variant="primary" className="w-100 py-2">
                Entrar
              </Button>
              <Button variant="-light" className="w-100 py-2 text-primary border border-primary">
                Cancelar
              </Button>
              <Button variant="-light" className="w-100 text-primary border border-primary "
              as={Link} to="/login"
              >
                Entrar Agora
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Cadastrar;

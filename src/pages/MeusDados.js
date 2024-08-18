import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';

function MeusDados() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <Navbar />
            <div className='container mt-5'>
                <h2 className="mb-4">Meus Dados</h2>
                <Form onSubmit={handleSubmit} validated={validated} className="mb-4">
                {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
                    <Form.Group controlId="forNomeCompleto" className="mb-3">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="Digite seu nome completo"  
                            
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira seu nome completo.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDataNascimento" className="mb-3">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control 
                            required
                            type="date" 
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, selecione sua data de nascimento.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            required
                            type="email" 
                            placeholder="Digite seu email" 
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, insira um email válido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formTelefone" className="mb-3">
                        <Form.Label>Telefone</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>+55</InputGroup.Text>
                            <Form.Control 
                                required
                                type="tel" 
                                placeholder="Digite seu telefone" 
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira um telefone válido.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default MeusDados;

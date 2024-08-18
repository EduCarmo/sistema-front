import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Pagamentos() {

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
        <h2 className="mb-4">Pagamento</h2>
        <Form onSubmit={handleSubmit} validated={validated} className="mb-4">
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> Se eu quiser outro tipo de validação*/}
          <Form.Group className="mb-3" controlId="formCardNumber">
            <Form.Label>Número do Cartão</Form.Label>
              <Form.Control 
                required
                type="text" 
                placeholder="1234 5678 9012 3456" 
              />
              <Form.Control.Feedback type="invalid">
                  Por favor, insira seu número de carão de crédito.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCardName">
            <Form.Label>Nome no Cartão</Form.Label>
              <Form.Control 
                required
                type="text" 
                placeholder="Nome Completo" 
                />
              <Form.Control.Feedback type="invalid">
                Por favor, insira seu nome completo.
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCardExpiry">
            <Form.Label>Data de Validade</Form.Label>
              <Form.Control
                required 
                type="text" 
                placeholder="MM/AA" 
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, insira a válidade do cartão.
                </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCardCVV">
            <Form.Label>CVV</Form.Label>
              <Form.Control 
                required
                type="text" 
                placeholder="123" 
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, insira o CVV do carão.
                </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Pagar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Pagamentos;

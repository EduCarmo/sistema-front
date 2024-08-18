import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Entradas() {
  const [entradas, setEntradas] = useState([]);
  const [formData, setFormData] = useState({
    mes: '',
    descricao: '',
    valor: '',
    origem: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mes || !formData.descricao || !formData.valor || !formData.origem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    setEntradas([...entradas, formData]);
    setFormData({
      mes: '',
      descricao: '',
      valor: '',
      origem: '',
    });
  };

  const handleDelete = (index) => {
    setEntradas(entradas.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h2 className="mb-4">Entradas</h2>
        <Form onSubmit={handleSubmit} className="mb-4">
          <Form.Group className="mb-3" controlId="mesReferencia">
            <Form.Label>Mês de Referência</Form.Label>
            <Form.Select 
              name="mes" 
              value={formData.mes} 
              onChange={handleChange} 
              required>
              <option value="">Selecione o mês</option>
              <option value="Janeiro">Janeiro</option>
              <option value="Fevereiro">Fevereiro</option>
              <option value="Março">Março</option>
              <option value="Abril">Abril</option>
              <option value="Maio">Maio</option>
              <option value="Junho">Junho</option>
              <option value="Julho">Julho</option>
              <option value="Agosto">Agosto</option>
              <option value="Setembro">Setembro</option>
              <option value="Outubro">Outubro</option>
              <option value="Novembro">Novembro</option>
              <option value="Dezembro">Dezembro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="descricaoEntrada">
            <Form.Label>Descrição</Form.Label>
            <Form.Control 
              type="text" 
              name="descricao" 
              placeholder="Descrição da entrada" 
              value={formData.descricao} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="valorEntrada">
            <Form.Label>Valor</Form.Label>
            <Form.Control 
              type="number" 
              name="valor" 
              placeholder="Valor da entrada" 
              value={formData.valor} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="origemEntrada">
            <Form.Label>Origem da Entrada</Form.Label>
            <Form.Control 
              type="text" 
              name="origem" 
              placeholder="Origem da entrada" 
              value={formData.origem} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Inserir
          </Button>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mês</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Origem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {entradas.map((entrada, index) => (
              <tr key={index}>
                <td>{entrada.mes}</td>
                <td>{entrada.descricao}</td>
                <td>{entrada.valor}</td>
                <td>{entrada.origem}</td>
                <td>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => handleDelete(index)}>
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Entradas;
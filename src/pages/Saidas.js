import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Saidas() {
  const [saidas, setSaidas] = useState([]);
  const [formData, setFormData] = useState({
    mes: '',
    tipoGastos: '',
    valorGasto: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mes || !formData.tipoGastos || !formData.valorGasto) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    setSaidas([...saidas, formData]);
    setFormData({
      mes: '',
      tipoGastos: '',
      valorGasto: '',
    });
  };

  const handleDelete = (index) => {
    setSaidas(saidas.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h2 className="mb-4">Saídas</h2>
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

          <Form.Group className="mb-3" controlId="tipoGastos">
            <Form.Label>Tipo de Gastos</Form.Label>
            <Form.Control 
              type="text" 
              name="tipoGastos" 
              placeholder="Descrição do tipo de gasto" 
              value={formData.tipoGastos} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="valorGasto">
            <Form.Label>Valor do Gasto</Form.Label>
            <Form.Control 
              type="number" 
              name="valorGasto" 
              placeholder="Descrição do valor do gasto" 
              value={formData.valorGasto} 
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
              <th>Tipo de Gastos</th>
              <th>Valor Gasto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {saidas.map((saidas, index) => (
              <tr key={index}>
                <td>{saidas.mes}</td>
                <td>{saidas.tipoGastos}</td>
                <td>{saidas.valorGasto}</td>
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

export default Saidas;
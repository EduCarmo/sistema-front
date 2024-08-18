import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Table from 'react-bootstrap/Table';

function Relatorios() {

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <h2 className="mb-4">Relatórios</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
            <th></th>
            <th>Janeiro</th>
            <th>Fevereiro</th>
            <th>Março</th>
            <th>Abril</th>
            <th>Maio</th>
            <th>Junho</th>
            <th>Julho</th>
            <th>Agosto</th>
            <th>Setembro</th>
            <th>Outubro</th>
            <th>Novembro</th>
            <th>Dezembro</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total de Entrada</td>
        </tr>
        <tr>
          <td>Total de Saída</td>
        </tr>
        <tr>
            <td>Lucro Líquido</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </>
  );
}

export default Relatorios;

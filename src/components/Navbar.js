import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarComponent() {


  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Nome do Sistema
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/" className="me-2">Home</Nav.Link>

            <NavDropdown title="Movimentações" id="movimentacoes-nav-dropdown" className="me-2">
              <NavDropdown.Item as={Link} to="/entradas">Entradas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/saidas">Saídas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/relatorios">Relatórios</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Criativos" id="criativos-nav-dropdown" className="me-2">
              <NavDropdown.Item href="#definir1">Ainda vai definir</NavDropdown.Item>
              <NavDropdown.Item href="#definir2">Ainda vai definir</NavDropdown.Item>
              <NavDropdown.Item href="#definir3">Ainda vai definir</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Usuário" id="user-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/meus-dados">Meus Dados</NavDropdown.Item>       
              <NavDropdown.Item as={Link} to="/pagamentos">Pagamento</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sair">Sair</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

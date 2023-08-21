import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home" className='nav__logo'>EscoMate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='nav__link'>Inicio</Nav.Link>
            <Nav.Link href="#about" className='nav__link'>Acerca del proyecto</Nav.Link>
            <Nav.Link href="#determinants" className='nav__link'>Determinantes</Nav.Link>
            <Nav.Link href="#simulation" className='nav__link'>Simulacion</Nav.Link>
            <Nav.Link href="#developers" className='nav__link'>Desarrolladores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

/*import '../assets/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/

import '../../App.css';
import '../../assets/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import bookLogo from '../../assets/logo.png';

//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

import CardWidget  from '../CardWidget/CardWidget';

const  NavBar = () => {
  return (
    <>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={bookLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#action1">Enlace 1</Nav.Link>
                <Nav.Link href="#action1">Enlace 2</Nav.Link>
                <Nav.Link href="#action1">Enlace 3</Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-8">
                <Nav.Link href="#action1">
                  <CardWidget />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
};

export default NavBar;
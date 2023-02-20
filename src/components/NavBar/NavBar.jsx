import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import s from './style.module.css';

export const NavBar = ({ image }) => {
  return (
    <Navbar fixed="top" bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">
        <img 
          src={ image } 
          alt="Nasa Logo"
          className={ s.logo }
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <h1>APOD | Astronomy Picture Of The Day</h1>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Apollo 11"
            className={ s.form }
            aria-label="Search"
          />
          <Button className={ s.search } variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

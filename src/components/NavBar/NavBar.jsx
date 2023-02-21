import { SearchBar } from '../SearchBar/SearchBar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import s from './style.module.css';

export const NavBar = ({ image, onSubmitItem }) => {
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
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <h1>APOD | Astronomy Picture Of The Day</h1>
        </Nav>

        <SearchBar onSubmit={ onSubmitItem } />

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

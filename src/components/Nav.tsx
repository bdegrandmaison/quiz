import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from '@tanstack/react-router';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ICON_SIZE = 24;

function AppNav() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    const html = document.querySelector('html');
    html?.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
    setDarkMode((prev) => !prev);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item onClick={toggleDarkMode} className="align-self-center">
              {darkMode ? (
                <MdOutlineLightMode size={ICON_SIZE} />
              ) : (
                <MdOutlineDarkMode size={ICON_SIZE} />
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;

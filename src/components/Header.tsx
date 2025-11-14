import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" className="logo d-flex align-items-center">
          <img
            src="/logoipsum.svg" 
            alt="Logo"
            height="35"
            className="me-2"
          />
          <span className="logo-text fw-bold">Logoipsum</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <NavDropdown title="Software Team" id="software-dropdown">
              <NavDropdown.Item href="#">Frontend</NavDropdown.Item>
              <NavDropdown.Item href="#">Backend</NavDropdown.Item>
              <NavDropdown.Item href="#">Fullstack</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Technologies</Nav.Link>
            <Nav.Link href="#">Resources</Nav.Link>
            <Nav.Link href="#">Company</Nav.Link>
          </Nav>

          {/* Right Button */}
          <Button className="get-in-touch-btn">
            Get In Touch <span className="arrow">↗</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

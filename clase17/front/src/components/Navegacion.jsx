import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Personas</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/formulario">Formulario</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;

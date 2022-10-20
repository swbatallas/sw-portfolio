import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'
import { Link } from 'react-router-dom';



export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' sticky="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">Stewart Batallas</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Sobre mi</Nav.Link>
                    <Nav.Link as={Link} to="skills">Habilidades</Nav.Link>
                    <Nav.Link as={Link} to="projects">Proyectos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
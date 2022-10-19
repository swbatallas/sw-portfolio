import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';



export default function HeaderNavBar() {
    return (
        <Navbar role='navigation' sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand><strong>Stewart Batallas</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="aboutme">Sobre mi</Nav.Link>
                        <Nav.Link href="skills">Habilidades</Nav.Link>
                        <Nav.Link href="projects">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
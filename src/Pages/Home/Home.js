import React from 'react'
import './Home.css'
import Nav from 'react-bootstrap/Nav';
import {Navbar, Container} from 'react-bootstrap';



export default function Home() {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Stewart Batallas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme">Sobre mi</Nav.Link>
                        <Nav.Link href="#skills">Habilidades</Nav.Link>
                        <Nav.Link href="#projects">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
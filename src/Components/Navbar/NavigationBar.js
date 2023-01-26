import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export default function NavigationBar() {
    const { t } = useTranslation();

    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' sticky="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">Stewart Batallas</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">{t('nav.about')}</Nav.Link>
                    <Nav.Link as={Link} to="skills">{t('nav.skills')}</Nav.Link>
                    <Nav.Link as={Link} to="projects">{t('nav.projects')}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
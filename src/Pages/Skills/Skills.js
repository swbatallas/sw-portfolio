import React from 'react'
import './Skills.css'
import { Container, Row, Col } from 'react-bootstrap'
import { lenguajes, frameworks, entornos, bbdd, otrasHerramientas } from './SkillsData'
import { SkillsComponent } from '../../Components/SkillsComponent'

export default function Skills() {

    return (
        <>
            <h1 className='title text-center text-uppercase mb-5'>Skills</h1>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <h2>Hard Skills</h2>
                            <SkillsComponent tipo='lenguajes de programacion' array={lenguajes} />
                            <SkillsComponent tipo='Frameworks y librerias' array={frameworks} />
                            <SkillsComponent tipo='Entornos' array={entornos} />
                            <SkillsComponent tipo='Bases de datos y auth' array={bbdd} />
                            <SkillsComponent tipo='Herramientas' array={otrasHerramientas} />
                        </Container>
                    </Col>
                    <Col xs={12} md={6}>
                        <Container className='d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='my-3'>Soft skills</h2>
                            <h3>Trabajo en equipo</h3>
                            <p>Con programas como Slack, trello y con metodologías ágiles.</p>
                            <h3>Código limpio y legible</h3>
                            <p>Facilita la integración continua de mejoras.</p>
                            <h3>Diseño responsive</h3>
                            <p>Enfocado en tener un diseño acorde al proyecto y adaptativo.</p>
                            <h3>Desarrollo escalable</h3>
                            <p>Buscando una buen rendimiento desde el inicio.</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
import React from 'react'
import SocialNetworks from '../Findme/SocialNetworks';
import { Row, Col, Container, Image } from 'react-bootstrap'
import './Profile.css'



export default function Profile() {
    return (
        <Container fluid='md' className='presentation mt-4'>
            <Container fluid className='title d-flex justify-content-center align-items-center'>
                <h1>Sobre mi</h1>
            </Container>
            <Container className='description'>
                <Row className=' d-flex mt-3'>
                    <Col xs={12} md={7} className='profile-photo d-flex justify-content-center align-items-center'>
                        <Image role='img' rounded src='Media/stw.png' alt='foto de perfil' />
                    </Col>
                    <Col className='about-me' xs={12} md={5}>
                        <p>
                            Desarrollador Full Stack. Soy un estudiante de bootcamp
                            en The Bridge y tengo experiencia realizando proyectos con React, MongoDB y Figma;
                            entre otras tecnologias.
                        </p>
                        <SocialNetworks />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
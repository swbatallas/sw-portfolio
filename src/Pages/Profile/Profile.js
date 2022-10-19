import React from 'react'
import SocialNetworks from '../Findme/SocialNetworks';
import { Container, Image, Row, Col } from 'react-bootstrap'
import './Profile.css'



export default function Profile() {
    return (
        <Container fluid className='personal'>
            <Row className='presentation'>
                <Col xs={6} md={8} className='name'>
                    <h1 className='text-md-center'>Stewart Batallas</h1>
                    <p className='text-md-center'>Full Stack Dev</p>
                </Col>
                <Col xs={6} md={4}>
                    <Image role='img' fluid roundedCircle src='Media/stw.png' alt='foto de perfil' />
                </Col>
            </Row>
            <Row className='description mt-5'>
                    <p>Amante de la tecnologia desde pequeño,
                        actualmente en constante aprendizaje para
                        crear aplicaciones de calidad.
                    </p>
                    <p>
                        <strong className='text-info'> React y Node.js </strong>
                        es lo que más me gusta para desarrollar
                        projectos full stack.
                    </p>
                    <p>En cuanto a mis hobbies, realizo ejercicio a diario y
                        me gusta pasar tiempo en familia.
                    </p>
            </Row>
            <div className='networks'>
                <SocialNetworks />
            </div>
        </Container>
    )
}
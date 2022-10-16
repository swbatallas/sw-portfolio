import React from 'react'
import SocialNetworks from '../Findme/SocialNetworks';
import stw from '../../assets/stw.png'
import { Container, Image, Row, Col } from 'react-bootstrap'
import './Profile.css'



export default function Profile() {
    return (
        <Container fluid className='personal d-flex flex-column justify-content-center'>
            <Row className='d-flex justify-content-around my-5'>
                <Col className='d-flex flex-column justify-content-center align-items-start'>
                    <h1>Stewart Batallas</h1>
                    <p><u>Full Stack Dev</u></p>
                </Col>
                <Col className='d-flex justify-content-center mt-3'>
                    <Image fluid roundedCircle src={stw} alt='foto de perfil' />
                </Col>
            </Row>
            <Row className='my-4'>
                <p className='w-75'>Amante de la tecnologia desde pequeño,
                    actualmente en constante aprendizaje para
                    crear aplicaciones de calidad.
                </p>
                <p className='w-75'>
                    <strong className='text-info'> React y Node.js </strong>
                    es lo que más me gusta para desarrollar
                    projectos full stack.
                </p>
                <p className='w-75'>En cuanto a mis hobbies, realizo ejercicio a diario y
                    me gusta pasar tiempo en familia.
                </p>

            </Row>
            <Row className='mt-5'>
                <SocialNetworks />
            </Row>
        </Container>
    )
}
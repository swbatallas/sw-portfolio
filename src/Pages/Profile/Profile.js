import React from 'react'
import SocialNetworks from '../Findme/SocialNetworks';
import stw from '../../assets/stw.png'
import { Container, Image, Row, Col } from 'react-bootstrap'
import './Profile.css'



export default function Profile() {
    return (
        <Container fluid className='personal'>
            <Row className='presentation'>
                <Col className='name'>
                    <h1>Stewart Batallas</h1>
                    <p>Full Stack Dev</p>
                </Col>
                <Col>
                    <Image fluid roundedCircle src={stw} alt='foto de perfil' />
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
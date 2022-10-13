import React from 'react'
import { Container } from 'react-bootstrap'
import './Profile.css'
import stw from '../../media/stw.png'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Profile() {
    return (
        <Container fluid>
            <Row className='d-flex justify-content-betwen my-5'>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <h1>Stewart Batallas</h1>
                    <h5>Full Stack Dev</h5>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image fluid roundedCircle src={stw} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='w-75 m-4'>Amante de la tecnologia desde pequeño,
                        actualmente en constante aprendizaje para
                        crear aplicaciones de calidad.
                        <code> React y Node.js</code> es lo que más me gusta para desarrollar
                        projectos full stack.  </p>
                </Col>
            </Row>
        </Container>
    )
}
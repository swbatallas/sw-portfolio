import React, { useState, useEffect } from 'react'
import './Home.css'
import keyboardVideo from '../../assets/keyboardVideo.mp4'
import Container from 'react-bootstrap/Container';
import Fade from 'react-bootstrap/Fade';
import { ArrowDown } from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(!open)
        }, 3000);
        return () => clearTimeout(timer);
    });


    return (
        <Container fluid className='home d-flex justify-content-center align-items-center'>
            <video className='video' src={keyboardVideo} autoPlay loop muted />
            <Container fluid className='d-flex flex-column justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <h1 className='text-info mw-100 display-1'>Bienvenido</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-row'>
                        <Fade in={open} appear='true' timeout='900'>
                            <h3 className='text-info'>Desliza</h3>
                        </Fade>
                        <Fade in={open} appear='true' timeout='1000'>
                            <ArrowDown className='text-info' size={30} />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
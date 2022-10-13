import React, { useState, useEffect } from 'react'
import './Home.css'
import keyboardVideo from '../../media/keyboardVideo.mp4'
import Container from 'react-bootstrap/Container';
import Fade from 'react-bootstrap/Fade';
import { ArrowDown } from 'react-bootstrap-icons';

export default function Home() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(!open)
        }, 3000);
        return () => clearTimeout(timer);
    });


    return (
        <Container fluid className='home d-flex flex-column justify-content-center align-items-center'>
            <video className='video' src={keyboardVideo} autoPlay loop muted />
            <h1>Bienvenido</h1>
            <Container className='fader d-flex flex-row justify-content-center align-items-center'>
                <Fade in={open} appear='true' timeout='900'>
                    <p>Desliza</p>
                </Fade>
                <Fade in={open} appear='true' timeout='1000'>
                    <ArrowDown color="rgb(80, 169, 138)" size={50} />
                </Fade>
            </Container>
        </Container>
    )
}

import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import mongo from './../../assets/mongo.png'
import express from './../../assets/express.png'
import react from './../../assets/react.png'
import nodejs from '../../assets/nodejs.png'
import { Animator, batch, MoveIn, Fade } from 'react-scroll-motion';


function Skills() {
    return (
        <Container fluid className='skills py-5 d-flex flex-column align-items-center'>
            <Animator animation={batch(MoveIn(-1000, 0), Fade())}>
                <Container fluid className='mern'>
                    <Image fluid src={mongo} />
                </Container>
            </Animator>
            <Animator animation={batch(MoveIn(1000, 0), Fade())}>
                <Container fluid className='mern'>
                    <Image fluid src={express} />
                </Container>
            </Animator>
            <Animator animation={batch(MoveIn(-1000, 0), Fade())}>
                <Container fluid className='mern'>
                    <Image fluid src={react} />
                </Container>
            </Animator>
            <Animator animation={batch(MoveIn(1000, 0), Fade())}>
                <Container fluid className='mern' >
                    <Image fluid src={nodejs} />
                </Container>
            </Animator>
            <Animator animation={Fade()}>
            <Container className='py-5 my-5 d-flex justify-content-center align-self-end'>
                <h5 className='w-75'>Además de tener experiencia con HTML, CSS, JS,
                    MySQL, bootstrap, Figma, i18n,
                    AWS, Firebase, entre otros...
                </h5>
                </Container>
            </Animator>
        </Container>
    )
}

export default Skills
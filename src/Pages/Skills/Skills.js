import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import mongo from './../../assets/mongo.png'
import express from './../../assets/express.png'
import react from './../../assets/react.png'
import nodejs from '../../assets/nodejs.png'
import { Animator, MoveIn, Fade } from 'react-scroll-motion';


function Skills() {
    return (

        <Container fluid className='skills pt-5'>
            <Animator animation={MoveIn(-1000, 0)}>
                <Container>
                    <Image fluid src={mongo} />
                </Container>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
                <Container>
                    <Image fluid src={express} />
                </Container>
            </Animator>
            <Animator animation={MoveIn(-1000, 0)}>
                <Container>
                    <Image fluid src={react} />
                </Container>
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
                <Container>
                    <Image fluid src={nodejs} />
                </Container>
            </Animator>
            <Animator animation={Fade()}>
                <p>Además de tener experiencia con HTML, CSS, JS,
                    MySQL, bootstrap, Figma, i18n,
                    AWS, Firebase, entre otros...
                </p>
            </Animator>
        </Container>
    )
}

export default Skills
import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import { Animator, Fade } from 'react-scroll-motion';


function Skills() {
    let skillsArray = ["mongo", "express", "react", "nodejs"]
    return (<Container fluid className='mern d-flex flex-column align-items-center'>
        {skillsArray.map((skill) => (
            <Animator animation={Fade()}>
                <Container fluid className={skill}>
                    <Image role='img' fluid src={`Media/${skill}.png`} alt={`${skill} icon`} />
                </Container>
            </Animator>
        ))}
        <Container className='extras d-flex w-75 justify-content-center'>
            <h4>
                HTML,CSS, JavaScript, Bootstrap, PrimeReact, MySQL, Figma,Firebase
            </h4>
        </Container>
    </Container>
    )
}

export default Skills
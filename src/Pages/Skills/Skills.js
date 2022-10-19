import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import { Animator, Fade } from 'react-scroll-motion';


function Skills() {
    let skillsArray = ["mongo", "express", "react", "nodejs"]
    return (<Container fluid>
        {skillsArray.map((skill) => (
            <Animator animation={Fade()}>
                <Container fluid className={skill}>
                    <Image role='img' fluid src={`Media/${skill}.png`} alt={`${skill} icon`} />
                </Container>
            </Animator>
        ))}
    </Container>
    )
}

export default Skills
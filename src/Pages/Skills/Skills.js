import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import { Animator, batch, MoveIn } from 'react-scroll-motion';

function Skills() {
    const skillsArray = [
        { name: "mongo", animation: MoveIn(1000,0) },
        { name: "express", animation: MoveIn(-1000,0) },
        { name: "react", animation: MoveIn(1000,0) },
        { name: "nodejs", animation: MoveIn(-1000,0) }
    ]
    console.log(skillsArray)
    return (<Container fluid className='mern d-flex flex-column align-items-center mt-5'>
        {skillsArray.map((skill) => (
            <Animator animation={skill.animation}>
                <Container fluid className={`${skill.name} d-flex justify-content-center`}>
                    <Image role='img' fluid src={`Media/${skill.name}.png`} alt={`${skill} icon`} />
                </Container>
            </Animator>
        ))}
        <Animator animation={MoveIn(-1000, 0)}>
            <Container className='extras d-flex mt-5'>
                <h4>
                    HTML,CSS, JavaScript, Bootstrap, PrimeReact, MySQL, Figma,Firebase
                </h4>
            </Container>
        </Animator>
    </Container>
    )
}

export default Skills
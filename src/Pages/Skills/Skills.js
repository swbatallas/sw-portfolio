import React from 'react'
import './Skills.css'
import { Container, Image, Card, Button } from 'react-bootstrap'
import { Animator, MoveIn } from 'react-scroll-motion';

function Skills() {
    const skillsArray = [
        { name: "mongo", animation: MoveIn(1000, 0) },
        { name: "express", animation: MoveIn(-1000, 0) },
        { name: "react", animation: MoveIn(1000, 0) },
        { name: "nodejs", animation: MoveIn(-1000, 0) }
    ]
    return (<Container fluid className='mern d-flex flex-column justify-content-center align-items-center mt-5'>
        {skillsArray.map((skill) => (
            <Animator animation={skill.animation} key={skill.name}>
                <Container fluid className={`${skill.name} d-flex justify-content-center`}>
                    <Image role='img' fluid src={`Media/${skill.name}.png`} alt={`${skill} icon`} />
                </Container>
            </Animator>
        ))}
        <Animator animation={MoveIn(1000, 0)}>
            <Card className='card mt-5 w-75'>
                <Card.Header>
                    <Card.Title>
                        MERN Stack
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        También tengo experiencia con HTML,CSS, JavaScript, Bootstrap, PrimeReact, MySQL,
                        Figma, Firebase, entre otros. Quieres saber mas sobre el MERN stack?
                    </Card.Text>
                    <Button href='https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer'
                        target="_blank" rel="noreferrer" variant='secondary'>
                        Pulsa aqui
                    </Button>
                </Card.Body>
            </Card>
        </Animator>
    </Container>
    )
}

export default Skills
import React, { useRef, useLayoutEffect } from 'react'
import './Skills.css'
import { Container, Image, Card } from 'react-bootstrap'
import { motion } from 'framer-motion';

function Skills() {
    const skillsArray = ["mongo", "express", "react", "nodejs"]
    const skillsRef = useRef(null)

    useLayoutEffect(() => {
        if (skillsRef) {
            setTimeout(() => { skillsRef.current.scrollIntoView() }, 500)
        }
    }, [skillsRef])

    return (<motion.div
        intial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}>
        <Container ref={skillsRef} className='mern d-flex flex-column justify-content-center align-items-center mt-5'>
            {skillsArray.map((skill) => (
                <Container fluid key={skill} className={`${skill} d-flex justify-content-center`}>
                    <Image role='img' src={`Media/${skill}.png`} alt={`${skill} icon`} />
                </Container>
            ))}
            <Card className='card-skills my-5'>
                <Card.Header>
                    <Card.Title>
                        Conocimientos
                    </Card.Title>
                </Card.Header>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <Card.Text>
                        <ul>
                            <li>HTML, CSS Y JavaScript</li>
                            <li>Bootstrap</li>
                            <li>PrimeReact</li>
                            <li>MySQL</li>
                            <li>Firebase</li>
                            <li>Figma</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </motion.div>
    )
}

export default Skills
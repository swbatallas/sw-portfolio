import React, { useRef, useLayoutEffect } from 'react'
import './Skills.css'
import { Container, Image, Card } from 'react-bootstrap'
import { useTranslation } from "react-i18next";


function Skills() {
    const skillsArray = ["mongo", "express", "react", "nodejs"]
    const skillsRef = useRef(null)
    const { t } = useTranslation();

    useLayoutEffect(() => {
        if (skillsRef) {
            setTimeout(() => { skillsRef.current.scrollIntoView() }, 500)
        }
    }, [skillsRef])

    return (
        <Container ref={skillsRef} className='mern d-flex flex-column justify-content-center align-items-center mt-5'>
            {skillsArray.map((skill) => (
                <Container fluid key={skill} className={`${skill} d-flex justify-content-center`}>
                    <Image role='img' src={`Media/${skill}.png`} alt={t(`icon.${skill}`)} />
                </Container>
            ))}
            <Card className='card-skills my-5'>
                <Card.Header>
                    <Card.Title>
                        {t('knowledges')}
                    </Card.Title>
                </Card.Header>
                <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>PrimeFaces</li>
                        <li>MySQL</li>
                        <li>Firebase</li>
                        <li>Figma</li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Skills
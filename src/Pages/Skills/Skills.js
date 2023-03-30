import React from 'react'
import './Skills.css'
import { Container } from 'react-bootstrap'
import { lenguajes, frameworks, entornos, bbdd, otrasHerramientas } from './SkillsData'
import { SkillsComponent } from '../../Components/SkillsComponent'

export default function Skills() {

    return (
        <>
            <h1 className='title text-center text-uppercase mb-4'>Skills</h1>
            <Container className='d-flex flex-row'>
                <Container>
                    <h2>Hard Skills</h2>
                    <SkillsComponent tipo='lenguajes de programacion' array={lenguajes} />
                    <SkillsComponent tipo='Frameworks y librerias' array={frameworks} />
                    <SkillsComponent tipo='Entornos' array={entornos} />
                    <SkillsComponent tipo='Bases de datos y auth' array={bbdd} />
                    <SkillsComponent tipo='Herramientas' array={otrasHerramientas} />
                </Container>
                <Container>
                    <h2>Soft skills</h2>
                </Container>
            </Container>
        </>
    )
}
import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import { lenguajes, frameworks, entornos, bbdd, otrasHerramientas } from './SkillsData'

export default function Skills() {

    return (
        <Container className='min-vh-100 d-flex flex-column justify-content-center'>
            <h1 className='title text-center text-uppercase mb-4'>Skills</h1>
            <Container className='mx-3'>
                <h2>Lenguajes de programacion</h2>
                {lenguajes.map(lenguaje => (
                    <div className='badge' key={lenguaje.name}>
                        <Image role='img' src={lenguaje.url} alt={lenguaje.name} className='raise' />
                    </div>
                ))}
            </Container>
            <Container className='mx-3'>
                <h2>Frameworks y librerias</h2>
                {frameworks.map(framework => (
                    <div className='badge' key={framework.name}>
                        <Image role='img' src={framework.url} alt={framework.name} className='raise' />
                    </div>
                ))}
            </Container>
            <Container className='mx-3'>
                <h2>Entornos</h2>
                {entornos.map(entorno => (
                    <div className='badge' key={entorno.name}>
                        <Image role='img' src={entorno.url} alt={entorno.name} className='raise' />
                    </div>
                ))}
            </Container>
            <Container className='mx-3'>
                <h2>Bases de datos y auth</h2>
                {bbdd.map(base => (
                    <div className='badge' key={base.name}>
                        <Image role='img' src={base.url} alt={base.name} className='raise' />
                    </div>
                ))}
            </Container>
            <Container className='mx-3'>
                <h2>Herramientas</h2>
                {otrasHerramientas.map(herramienta => (
                    <div className='badge' key={herramienta.name}>
                        <Image role='img' src={herramienta.url} alt={herramienta.name} className='raise' />
                    </div>
                ))}
            </Container>

        </Container>
    )
}
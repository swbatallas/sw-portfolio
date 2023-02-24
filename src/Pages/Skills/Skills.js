import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'
import { lenguajes, frameworks, entornos, bbdd, otrasHerramientas } from './SkillsData'

export default function Skills() {

    return (
        <Container className='min-vh-100'>
            <h1 className='title text-uppercase mb-4'>Skills</h1>
            <h2>Lenguajes de programacion</h2>
            <Container>
                {lenguajes.map(lenguaje => (
                    <div className='badge' key={lenguaje.name}>
                        <Image role='img' src={lenguaje.url} alt={lenguaje.name} className='raise' />
                    </div>
                ))}
            </Container>
            <h2>Frameworks y librerias</h2>
            <Container>
                {frameworks.map(framework => (
                    <div className='badge' key={framework.name}>
                        <Image role='img' src={framework.url} alt={framework.name} className='raise' />
                    </div>
                ))}
            </Container>
            <h2>Entornos</h2>
            <Container>
                {entornos.map(entorno => (
                    <div className='badge' key={entorno.name}>
                        <Image role='img' src={entorno.url} alt={entorno.name} className='raise' />
                    </div>
                ))}
            </Container>
            <h2>Bases de datos y auth</h2>
            <Container>
                {bbdd.map(base => (
                    <div className='badge' key={base.name}>
                        <Image role='img' src={base.url} alt={base.name} className='raise' />
                    </div>
                ))}
            </Container>
            <h2>Herramientas</h2>
            <Container>
                {otrasHerramientas.map(herramienta => (
                    <div className='badge' key={herramienta.name}>
                        <Image role='img' src={herramienta.url} alt={herramienta.name} className='raise' />
                    </div>
                ))}
            </Container>

        </Container>
    )
}
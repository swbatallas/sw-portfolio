import React from 'react'
import './Skills.css'
import { Container, Image } from 'react-bootstrap'

function Skills() {

    const lenguajes = [
        { name: 'HTML', url: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
        { name: 'CSS', url: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
        { name: 'JavaScript', url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' }
    ]

    const frameworks = [
        { name: 'react', url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
        { name: 'bootstrap', url: 'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' },
        { name: 'MUI', url: 'https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white' },
        { name: 'express.JS', url: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
        { name: 'React Router', url: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' },
    ]

    const entornos = [
        { name: 'vite', url: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' },
        { name: 'node.js', url: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' }
    ]
    const bbdd = [
        { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' },
        { name: 'Firebase', url: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white' }
    ]

    const otrasHerramientas = [
        { name: 'Visual Studio Code', url: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
        { name: 'NPM', url: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' },
        { name: 'netlify', url: 'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7' },
        { name: 'heroku', url: 'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white' },
        { name: 'github', url: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' }
    ]

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

export default Skills
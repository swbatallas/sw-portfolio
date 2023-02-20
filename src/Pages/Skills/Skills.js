import React from 'react'
import { Container, Image } from 'react-bootstrap'

function Skills() {

    const lenguajes = [
        { name: 'HTML', url: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
        { name: 'CSS', url: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
        { name: 'JavaScript', url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' }
    ]

    const frameworks = [
        { name: 'ReactJS', url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
        { name: 'Bootstrap', url: 'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' },
        { name: 'Material UI', url: 'https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white' },
        { name: 'ExpressJS', url: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
        { name: 'React Router', url: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' }

    ]

    const entornos = [
        { name: 'ViteJS', url: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white' },
        { name: 'NodeJS', url: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' },
    ]
    const bbdd = { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' }

    const otrasHerramientas = [
        { name: 'VS Code', url: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: 'NPM', url: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white' },
        { name: 'Netlify', url: 'https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7' },
        { name: 'Heroku', url: 'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white' }
    ]
    return (
        <Container>
            <h1>Conocimientos</h1>
            <h2>Lenguajes de programacion</h2>
            <Image src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'></Image>
        </Container>
    )
}

export default Skills
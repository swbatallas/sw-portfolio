import React from 'react'
import './Projects.css'
import { projectData } from './projectData'
import { Button, Container, Image } from 'react-bootstrap'



function Projects() {

  return (
    <Container className='min-vh-100' fluid>
      <h1 className='text-center'>Proyectos</h1>
      <Container className='mb-2 d-flex justify-content-center align-items-center' fluid>
        {projectData.map((project, key) => (
          <div className='project-container m-4' key={key}>
            <Image src={project.src} alt={project.name} />
            <Container
              className='project-description d-flex flex-column justify-content-center align-items-center'>
              <h2>{project.name}</h2>
              <p>{project.description.es}</p>
              <Button>Ver mas</Button>
            </Container>
          </div>
        ))}
      </Container>
    </Container>

  )
}

export default Projects
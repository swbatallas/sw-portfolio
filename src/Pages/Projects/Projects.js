import React from 'react'
import './Projects.css'
import { projectData } from './projectData'
import { Button, Row, Col, Container, Image } from 'react-bootstrap'



function Projects() {

  return (
    <Container className='min-vh-100' fluid>
      <h1 className='title text-center text-uppercase mb-4'>Proyectos</h1>
      <Row>
        {projectData.map((project, key) => (
          <Col xs={12} md={6} lg={4} xl={3}>
            <div className='project-container m-4' key={key}>
              <Image src={project.src} alt={project.name} />
              <Container
                className='project-description d-flex flex-column justify-content-center align-items-center'>
                <h2>{project.name}</h2>
                <p>{project.description.es}</p>
                <Button href={project.url} target="blank">
                  Visitar web
                </Button>
              </Container>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default Projects
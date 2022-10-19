import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import './Projects.css'

function Projects() {
  return (
    <Container className='projects pt-5'>
      <h1 className='my-5'>Proyectos</h1>
      <Card className='card'>
        <Card.Header className='d-flex flex-column justify-content-center'>
          <Card.Img variant='top' src='Media/trivial.png' alt='imagen del trivial' />
          <Card.Title className='mt-2'>
            FRAGEN
          </Card.Title>
        </Card.Header>
        <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
          <Card.Text>
            Juego creado junto a mis compañeros de The Bridge
          </Card.Text>
          <Button variant='info'>
            Fragen
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Projects
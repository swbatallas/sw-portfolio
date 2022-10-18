import React from 'react'
import { Container, Image, Card, Button } from 'react-bootstrap'
import trivial from './../../assets/trivial.png'
import './Projects.css'

function Projects() {
  return (
    <Container fluid className='projects'>
      <h1>Proyectos</h1>
      <Card border="dark" className='card'>
        <Card.Title className='title mt-2'>
          <strong>FRAGEN</strong>
        </Card.Title>
        <Image fluid src={trivial} alt='imagen del trivial' />
        <Card.Body>
          <Card.Text>
            Juego creado junto a mis compañeros de The Bridge
          </Card.Text>
          <Button variant='primary'>
            Fragen
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Projects
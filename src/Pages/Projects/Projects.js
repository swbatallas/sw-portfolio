import React from 'react'
import { Container, Card } from 'react-bootstrap'
import trivial from './../../assets/trivial.png'

function Projects() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center mt-4'>
      <h1>Proyectos</h1>
      <Card className=''>
        <Card.Img variant='top' src={trivial} />
        <Card.Title>Trivial APP</Card.Title>
        <Card.Text>
          Juego de Trivial realizado desde el principio junto
          a mis compañeros del bootcamp de The Bridge
        </Card.Text>
        <Card.Link href="#">TrivialAPP</Card.Link>
      </Card>
    </Container>
  )
}

export default Projects
import React, { useRef, useLayoutEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import './Projects.css'
import { motion } from 'framer-motion';


function Projects() {
  const projectsRef = useRef(null)

  useLayoutEffect(() => {
    if (projectsRef) {
      setTimeout(() => {projectsRef.current.scrollIntoView()}, 300)
    }
  }, [projectsRef])

  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}>
      <Container ref={projectsRef} className='projects mt-5'>
        <h1 className='my-5'>Proyectos</h1>
        <Card className='card-project'>
          <Card.Header className='d-flex flex-column'>
            <Card.Img variant='top' src='Media/trivial.png' alt='imagen del trivial' />
            <Card.Title className='mt-2'>
              FRAGEN
            </Card.Title>
          </Card.Header>
          <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <Card.Text className='text-center'>
              Juego creado junto a mis compañeros de The Bridge
            </Card.Text>
            <Button variant='info'>
              Fragen
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </motion.div>
  )
}

export default Projects
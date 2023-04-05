import React from 'react'
import './Projects.css'
import { Container } from 'react-bootstrap'



function Projects() {

  return <div className='projects-container mt-5'>
    <h1 className='title text-center text-uppercase mb-4'>Proyectos</h1>
    <Container className='d-flex justify-content-center align-items-center my-3'>
      <img src='/Media/unioapp.png' className='project-image' alt='imagen de la app unio' />
      <Container>
        <h2 className='text-center'>Unio app</h2>
        <p className='text-center'>Unio es una biblioteca interactiva sobre los personajes de marvel. Puedes acceder a su info,
          valorar los personajes y ver un ranking, elegir tu favorito, etc. Incluye modo claro y oscuro.
          También te permite realizar la búsqueda de personajes.</p>
      </Container>
    </Container>
  </div>


}

export default Projects
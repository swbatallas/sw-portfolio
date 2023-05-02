import React from 'react'
import Project from '../../Components/Project'
import data from './data.json'


export default function Portfolio() {

  return <div className='project-container min-vh-100 mt-5'>
      <h1 className='title text-center'>Portfolio</h1>
    <Project proyect={data.unio} />
  </div>
}
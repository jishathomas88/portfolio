import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../Styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
      {
        ProjectList.map((projectItem,index)=>{
        
         return(<ProjectItem image={projectItem.image} name={projectItem.name} id={index} />)
        })
      }
      </div>
      
    </div>
  )
}

export default Projects

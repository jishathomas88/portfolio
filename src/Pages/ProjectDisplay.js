import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import '../Styles/ProjectDisplay.css'
import { GitHub } from '@mui/icons-material';

function ProjectDisplay() {
    const params=useParams();
    const {id}=params;
      console.log(id);  
      const project=ProjectList[id]    

 return (
    <div className='project'>
        <h2>{project.name}</h2>
         <img src={`${project.image}`}></img>
                        
        <p>Skills:{project.skills}</p>
        <GitHub />
    
     
       </div>
  )
}

export default ProjectDisplay

import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import '../Styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi, My Name is Jisha</h2>
        <div className="prompt">
        <p>I am a Website developer with a passion for learning and creating.</p>
        <GitHub />
        <Email />
        <LinkedIn />
        </div>
        
      </div>
      <div className="skills">
              <h1>Skills</h1>
              <ol className='list'>
                <li className='item'>
                  <h2>Front-end skills</h2>
                  <span>Html,css,javascript,React,material-ui,bootstrap</span>
                </li>
                <li className='item'>
                  <h2>Back-end skills</h2>
                  <span>Node js ,Express,Mongodb,mysql,Postman, REST API</span>
                </li>
                <li className='item'>
                  <h2>Languages</h2>
                  <span>Javascript,Java,cpp</span>
                </li>
                </ol>    
          
              
      </div>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../Styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [navBarExpand,setnavBarExpand]=useState(false);
    const location=useLocation();
    useEffect(()=>{
     setnavBarExpand(false);
    },[location])
  return (
    <div className='navbar' id={navBarExpand ? 'open' : 'close'}>
        <div className="toggleButton">
            <button onClick={()=>
                setnavBarExpand((prev)=>!prev)
                }><ReorderIcon /></button>
        </div>
        <div className="links">
          <Link to='/'>Home</Link> 
          <Link to='/projects'>Projects</Link> 
          <Link to='/experiences'>Experiences</Link>
        </div>
      
    </div>
  )
}

export default Navbar

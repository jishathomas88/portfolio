import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMediaAccounts">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <div>
        <p> &copy:jishathomas.net</p>
      </div>
    </div>
  )
}

export default Footer

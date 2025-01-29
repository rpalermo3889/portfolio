import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { PictureAsPdf } from "@mui/icons-material";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
          <a href="https://www.linkedin.com/in/rpalermo3889/" target="_blank" rel="noopener noreferrer">
            <LinkedIn titleAccess="LinkedIn" />
          </a>
          <a href="mailto:robertpalermo3889@gmail.com">
            <Email titleAccess="Email" />
          </a>
          <a href="https://www.github.com/rpalermo3889" target="_blank" rel="noopener noreferrer">
            <GitHub titleAccess="GitHub" />
          </a>
          <a href="https://drive.google.com/file/d/15kfZ5v5DuzukfjjvzkgPRcf7vX99xSW6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <PictureAsPdf titleAccess="Picture" />
          </a>
        </div>
        <p>robertpalermo3889@gmail.com</p>
        <p>&copy; 2024 rpalermo3889.github.io/RobertPalermo/</p>
    </div>
  )
}

export default Footer
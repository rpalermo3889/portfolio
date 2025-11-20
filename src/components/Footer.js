import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import { PictureAsPdf } from "@mui/icons-material";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
          <a href="https://www.linkedin.com/in/rpalermo3889/" target="_blank" rel="noopener noreferrer">
            <LinkedIn titleAccess="LinkedIn" />
          </a>
          <a href="https://www.github.com/rpalermo3889" target="_blank" rel="noopener noreferrer">
            <GitHub titleAccess="GitHub" />
          </a>
          <a href="https://drive.google.com/file/d/1KRb9XZosub-HiSYOSDJZchd5W31aBeFd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <PictureAsPdf titleAccess="Picture" />
          </a>
        </div>
        <p>Contact Info:</p>
        <p>Robert Palermo</p>
        <p>(831) 392-7258</p>
        <p>robertpalermo3889@gmail.com</p>
        <p>&copy; 2025 rpalermo3889.github.io/RobertPalermo/</p>
    </div>
  )
}

export default Footer
import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { GitHub } from '@mui/icons-material';
import { PictureAsPdf } from "@mui/icons-material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Robert</h2>
        <div className="prompt">
          <p>Welcome!</p>
          <p>I'm a software developer and I'm very passionate about learning different ways to use computers to improve our daily lives.</p>
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
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Proficient Languages</h2>
            <span>
            C/C++, Python, Java, JavaScript, HTML/CSS, LaTeX
            </span>
          </li>
          <li className="item">
            <h2> Previous Experience</h2>
            <span>
            MATLAB, R, RISC-V
            </span>
          </li>
          <li className="item">
            <h2>Libraries</h2>
            <span>
            Flask, React, Material-UI, ROS2, NumPy, SciPy, Tailwind, Socket.IO
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>Git/GitHub, VS Code, IntelliJ, PyCharm, Qt, Firebase, Android Studio</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
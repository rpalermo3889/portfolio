// ...existing code...
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
          
          <div className="header"> 
            <h1> . </h1>
          </div>

      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July - November 2024"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Shift Manager - Army & Air Force Exchange Service
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Eglin Air Force Base, FL
          </h4>
          <p>
            Supervise and manage staff to ensure excellent customer service and efficient operations. 
            Oversee cash handling, inventory management, and store maintenance to maintain smooth operations.
            Ensure adherence to safety protocols, health regulations, and base-specific policies, while being prepared to handle emergencies.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2024"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Fullstack Developer - HackMerced IX
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Merced, CA
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Hackathon
          </h4>
          <p>
            Developed a website that enables user story inputs: allowing its user to type in their symptoms and what they are feeling. The platform looks for keywords within the user input and processes it to be compared with various illness symptoms.
            The website outputs a list of illness names ranking from the most likely to the least. And a short description of each illness.
            Coded in HTML/CSS and JavaScript
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August - December 2023"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Backend Developer - Camera-To-Robot Calibration
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Merced, CA
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Capstone
          </h4>
          <p>
            Developed an in-house software and worked under the mentorship of Omron Robotics and Safety Technologies, Inc.
            Researched and implemented a camera-to-robot algorithm for mounted camera positions.
            Coded in Python and wrapped in C#, utilized Numpy for calculating matrices and Scipy for solving the optimization problem.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2023"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Backend Developer - HackMerced VIII
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Merced, CA
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Hackathon
          </h4>
          <p>
            Developed a website that allows local businesses to showcase their events to entice the community of Merced to engage with the local business scene.
            Utilized React for frontend and Firebase for the website’s database.
            Won 2nd place in the Business & Finance track.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2024"
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            University of California, Merced
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Merced, CA
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science Degree
          </h4>
          <p> Computer Science & Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
             Trainee - Restaurant Operations Management Academy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vandenberg Space Force Base, CA
          </h4>
          <p>
            Shadowing facilities managers and learning about their duties.
            Understanding management techniques, such as time and people management.
            Learning different restaurant concepts and operations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
             Customer Service Sales Associate - Army & Air Force Exchange Service
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vandenberg Space Force Base, CA
          </h4>
          <p>
            Cashiering, check-cashing, layaways, refunds.
            Cross-training in retail, fast food, and movie theater.
            Assisting with troubleshooting and repairing electronic devices. (e.g. POS systems, printers, and movie projectors)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Allan Hancock College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Santa Maria, CA
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern - CompTechS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cupertino, CA
          </h4>
          <p> 
            Working as a team to refurbish and redeploy computers.
            Repairing or replacing any broken hardware (e.g. keyboard, battery, SSD).
            Setting up anti-virus programs, updating user security protocols, and installing any other computer programs the end user may need.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            De Anza College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cupertino, CA
          </h4>

          <p> Major in Computer Science </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Jacksonville High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Jacksonville, AR
          </h4>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2017"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Team Member - CyberPatriot
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vacaville, CA
          </h4>
          <p> School Organization </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2018"
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Reserve Officer Training Corps
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vacaville, CA - Jacksonville, AR
          </h4>
          <p> School Organization </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Vanden High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vacaville, CA
          </h4>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
// ...existing code...
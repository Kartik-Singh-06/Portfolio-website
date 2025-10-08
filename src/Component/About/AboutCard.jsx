import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Viewer, I am <span className="purple">Kartik&nbsp;Singh</span> from 
            <span className="purple"> Aligarh, Uttar Pradesh, India. </span> 
            A <strong>Frontend&nbsp;Developer</strong> skilled in React, Redux/RTK, 
            JavaScript&nbsp;(ES6+), and TypeScript, with hands-on experience delivering production-ready ERP dashboards during an internship at Nestbotics Automation Pvt. Ltd. (May – Aug 2025). 
            My focus areas include responsive design, performance optimization, and API integration. 
            I earned a B.Tech in Computer Science & Engineering from Kalinga University and hold a Diploma in Computer Science from Vivekananda College of Polytechnic. 
            Recent side projects include Kai — an AI chat agent, CineFlix streaming platform, and a Food-App ordering system.
            <br />
            <br />
            Away from the keyboard, a few passions keep the creativity flowing!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> UI experiments
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & local food adventures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming ideas into pixel-perfect experiences."
          </p>
          <footer className="blockquote-footer">Ks.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

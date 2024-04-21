import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" ,  }}>
            Hi Everyone, I am <span className="purple">Kartik Singh </span>
            from <span className="purple"> Aligarh, Uttar Pradesh, India. </span> 
            Currently, I am pursuing a B.Tech in Computer Science at  Kalinga University, Raipur, and I have also completed a diploma in  computer science. I am eagerly seeking job opportunities as a fresher to further  develop my skills and contribute effectively to the industry. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "Empower change through meaningful creations!"
          </p>
          <footer className="blockquote-footer">Ks.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

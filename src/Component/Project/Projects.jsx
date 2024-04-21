import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sundown from "../../assets/Projects/SunDown.png";
import refokus from "../../assets/Projects/Refokus.png";
import cineflix from "../../assets/Projects/Cine-flix.png";
import food from "../../assets/Projects/food-app.png";
import expo from "../../assets/Projects/Exoape.png";
import currency from "../../assets/Projects/Currency.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cineflix}
              isBlog={false}
              title="CineFlix"
              description="
              CineFlix is a cutting-edge movie application that encapsulates the essence of modern entertainment. Developed with React, Redux, Axios, React Player, Tailwind CSS, React Router, and Google Firebase, it offers a seamless user experience for movie enthusiasts. The app's core functionality revolves around showcasing trailers, latest movies, TV shows, biographies, and social media links of industry figures."
              ghLink="https://github.com/Kartik-Singh-06/cineflix.git"
              demoLink="https://cineflix-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food App"
              description="The Food-App is a dynamic web platform powered by React, Redux, Tailwind CSS, and React Router. It harnesses Swiggy's live API to seamlessly display restaurants, menus, and cart functionalities for convenient ordering. Key features include real-time data integration, intuitive UI for menu exploration, and cart management. Challenges revolve around adapting to Swiggy's API changes while ensuring uninterrupted functionality."
              ghLink="https://github.com/Kartik-Singh-06/food-App.git"
              demoLink="https://food-app-gules-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expo}
              isBlog={false}
              title="Exo Ape"
              description="Exo Ape, a website clone built with React and powered by the Framer Motion library, redefines the concept of dynamic web experiences. Leveraging the latest in animation technology, Exo Ape offers a visually stunning interface that captivates users. With Framer Motion's capabilities, the site boasts seamless animations, interactive elements, and smooth transitions, enhancing user engagement and navigation. "
              ghLink="https://github.com/Kartik-Singh-06/exoape.git"
              demoLink="https://exoape-two.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="The Currency Converter project, developed using React, showcases a streamlined approach to currency conversion. By utilizing an exchange rate API, the app provides real-time currency rates and enables seamless conversions between different currencies. Its intuitive user interface allows users to input values, select currencies, and instantly view converted amounts. "
              // ghLink=""
              demoLink="https://react-projects-smoky-gamma.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={refokus}
              isBlog={false}
              title="Refokus-replica"
              description="a website clone crafted using React and empowered by the Framer Motion library, revolutionizes dynamic web experiences. Harnessing advanced animation technology, Refokus Project delivers a visually captivating interface that mesmerizes users."
              ghLink="https://github.com/Kartik-Singh-06/refokus-clone.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sundown}
              isBlog={false}
              title="Sun Down"
              description="
              Sundown, an animated website clone crafted with HTML, CSS, and JavaScript, elevates web experiences through smooth scrolling and dynamic animations. Leveraging GSAP for animation, Sundown implements scroll triggers seamlessly, enhancing user interaction and engagement. The site's design showcases fluid transitions, captivating visuals, and an immersive storytelling experience."
              ghLink="https://github.com/Kartik-Singh-06/SunDown.git"
              demoLink="https://sun-down.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

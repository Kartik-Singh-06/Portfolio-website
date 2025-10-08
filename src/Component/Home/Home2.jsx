import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import square from "../../assets/Square.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET&nbsp;ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Crafting fast, accessible interfaces with{" "}
              <span className="purple">React&nbsp;</span>is a daily habit,
              honed while shipping ERP dashboards during an internship at Nestbotics Automation&nbsp;Pvt.&nbsp;Ltd.{" "}
              I love transforming complex data into intuitive UIs, optimising performance, and
              integrating robust REST APIs to keep users in flow.
              <br />
              <br />
              <em className="purple">Key stack:</em> React&nbsp;/ Redux&nbsp;Toolkit&nbsp;/ JavaScript&nbsp;(ES6+) &nbsp;|&nbsp; Tailwind&nbsp;CSS&nbsp;/ Material&nbsp;UI &nbsp;|&nbsp; Git&nbsp;+&nbsp;Vercel.
              <br />
              <br />
              When not polishing pixels, you will find me experimenting with conversational AI (Kai&nbsp;Agent), binging movie metadata on CineFlix, or refining a live food-ordering flow.
              <br />
              <br />
              Let’s build something delightful together!
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={square} className="img-fluid photo" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND&nbsp;ME&nbsp;ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> and chat about code,
              design, or the latest gaming release.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kartik-Singh-06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kartik-singh-6b63871a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_kartik__thakur__7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

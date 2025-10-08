import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name">KARTIK SINGH</strong>
              </h1>

              <div style={{ padding: "40px 45px", textAlign: "left" }}>
                <Type />
              </div>

              {/* Professional tagline */}
              <div className="home-tagline" style={{ 
                marginTop: "30px", 
                fontSize: "1.1em",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6"
              }}>
                <p >
                  <span className="purple">Frontend Developer</span> with production experience in{" "}
                  <span className="purple">ReactJs</span>
                </p>
                <p style={{ fontSize: "0.95em", marginTop: "10px" }}>
                  Building scalable web applications with modern JavaScript ecosystems
                </p>
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid"
                style={{ 
                  maxHeight: "450px",
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

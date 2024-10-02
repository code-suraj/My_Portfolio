import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/aichar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={3} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "600px",   // Increased the max height for the logo
                  borderRadius: "20px",  // Added border-radius for rounded corners
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Applied shadow for effect
                  border: "5px solid #c084f5"  // Updated border color to #c084f5
                }}
              />
            </Col>

            <Col md={9} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sai Suraj Nuthanakalva</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

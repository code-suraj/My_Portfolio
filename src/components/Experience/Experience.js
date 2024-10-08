import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills"



function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "5px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "20px",
            }}
          >
            <Education/>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Work/>
          </Col>
          <Skills/>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Experience;

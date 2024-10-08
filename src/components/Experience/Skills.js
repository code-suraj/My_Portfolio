import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import './Skills.css';  // You will add custom styles here

function Skills() {
  return (
    <Container fluid className="skills-section">
      <Container>
        <h1 className="skills-heading" style={{ textAlign: "center" }}>
          <strong className="purple">Skills</strong>
        </h1>
        
        <Row className="justify-content-center" style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <h4 className="text-center">Java & Spring Boot</h4>
            <ProgressBar now={95} label={`${95}%`} className="purple-bar" />
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <h4 className="text-center">React & Angular</h4>
            <ProgressBar now={90} label={`${90}%`} className="purple-bar" />
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <h4 className="text-center">RESTful APIs & Microservices</h4>
            <ProgressBar now={92} label={`${92}%`} className="purple-bar" />
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <h4 className="text-center">AWS & Cloud Deployment</h4>
            <ProgressBar now={88} label={`${88}%`} className="purple-bar" />
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <h4 className="text-center">CI/CD (Jenkins, Docker, Kubernetes)</h4>
            <ProgressBar now={85} label={`${85}%`} className="purple-bar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;

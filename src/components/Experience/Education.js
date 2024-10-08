import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Education() {
  return (
    <Container fluid className="education-section">
      <Container>
        <h1 className="education-heading">
          <strong className="purple">Education</strong>
        </h1>

        {/* Texas A&M University */}
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <h2>Texas A&M University | Corpus Christi</h2>
            <h4>Master of Science, Computer Science</h4>
            <span className="duration">Jan 2023 – Aug 2024</span>

          </Col>
        </Row>

        {/* Gitam University */}
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <h2>Gitam University | Hyderabad</h2>
            <h4>Bachelor of Technology, Computer Science</h4>
            <span className="duration">Jun 2012 – Apr 2016</span>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;

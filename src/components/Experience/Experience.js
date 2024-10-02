import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";  // Importing FaStar icon

const Experience = () => {
  return (
    <Container fluid className="experience-section">
      {/* Education Section */}
      <Row className="education mb-5">
        <Col md={9} className="section-box">
          <h2 className="section-title">
            <FaGraduationCap /> Education
          </h2>
          <h3>Bachelor of Computer Science & Technology</h3>
          <p>Graduated: May 2018</p>
          <p>
            Specialization in Java-based application development and cloud
            infrastructure. Proficient in data structures, algorithms, and
            object-oriented programming.
          </p>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="experience mb-5">
        <Col md={9} className="section-box">
          <h2 className="section-title">
            <FaBriefcase /> Experience
          </h2>

          {/* Full-Stack Developer */}
          <h3>Full-Stack Java Developer / AWS Software Engineer</h3>
          <p>Client Company 5 | Aug 2018 – Present</p>
          <ul className="experience-list">
            <li>
              <FaStar className="list-icon" /> Engaged in all phases of Software Development Life Cycle (SDLC),
              including requirement gathering, design, development, testing,
              deployment, and maintenance.
            </li>
            <li>
              <FaStar className="list-icon" /> Leveraged Java, Spring Boot, and REST APIs to build scalable,
              modular applications.
            </li>
            <li>
              <FaStar className="list-icon" /> Collaborated with teams to deploy microservices architecture using
              AWS (EC2, S3, RDS).
            </li>
            <li>
              <FaStar className="list-icon" /> Integrated message brokers like Kafka for asynchronous
              communication.
            </li>
          </ul>

          {/* Software Engineer */}
          <h3>Software Engineer</h3>
          <p>Client Company 3 | Feb 2016 – Jul 2018</p>
          <ul className="experience-list">
            <li>
              <FaStar className="list-icon" /> Developed custom reusable components using React.js and Bootstrap
              for SPA.
            </li>
            <li>
              <FaStar className="list-icon" /> Built RESTful web services using Spring Boot, ensuring high
              scalability and availability.
            </li>
            <li>
              <FaStar className="list-icon" /> Implemented PL/SQL scripts for batch processing and optimized
              queries.
            </li>
          </ul>

          {/* Junior Software Developer */}
          <h3>Junior Software Developer</h3>
          <p>Client Company 2 | Jan 2014 – Jan 2016</p>
          <ul className="experience-list">
            <li>
              <FaStar className="list-icon" /> Collaborated with front-end team to integrate APIs with React
              applications.
            </li>
            <li>
              <FaStar className="list-icon" /> Performed unit and integration testing using JUnit.
            </li>
          </ul>
        </Col>
      </Row>

      {/* Skills Section */}
      <div className="skill-section">
        <h2 className="section-title">Skills</h2>
        <Row className="skill">
          <Col md={8} className="text-center">
            <h4>Web Development</h4>
            <ProgressBar now={90} label={`${90}%`} className="custom-progress-bar" />
          </Col>
        </Row>

        <Row className="skill">
          <Col md={8} className="text-center">
            <h4>React.js</h4>
            <ProgressBar now={85} label={`${85}%`} className="custom-progress-bar" />
          </Col>
        </Row>

        <Row className="skill">
          <Col md={8} className="text-center">
            <h4>AWS Services</h4>
            <ProgressBar now={80} label={`${80}%`} className="custom-progress-bar" />
          </Col>
        </Row>

        <Row className="skill">
          <Col md={8} className="text-center">
            <h4>CI/CD Pipelines</h4>
            <ProgressBar now={75} label={`${75}%`} className="custom-progress-bar" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Experience;

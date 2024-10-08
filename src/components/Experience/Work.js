import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Work() {
  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">
          <strong className="purple">Work Experience</strong>
        </h1>

        {/* IBM */}
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <h2>IBM</h2>
            <h4>Sr. Full Stack Java Developer</h4>
            <span className="duration">Feb 2023 – Present</span>
            <ul className="experience-list">
              <li>
                Developed an AI-powered employee self-service portal integrated with ServiceNow for asset management and intelligent ticket routing.
              </li>
              <li>
                Built a highly interactive front-end using React and Microsoft Bot Framework, providing real-time IT support.
              </li>
              <li>
                Designed and developed RESTful APIs using Java and Spring Boot for real-time communication with ServiceNow.
              </li>
              <li>
                Managed CI/CD pipelines using Jenkins, integrating SonarQube for continuous code quality checks.
              </li>
            </ul>
          </Col>
        </Row>

        {/* Lactalis */}
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <h2>Lactalis</h2>
            <h4>Full Stack Java Developer</h4>
            <span className="duration">Mar 2021 – Feb 2023</span>
            <ul className="experience-list">
              <li>
                Developed a sustainability tracking system for real-time monitoring of carbon emissions and energy consumption.
              </li>
              <li>
                Built interactive dashboards using Angular and Highcharts, visualizing key metrics such as energy consumption and production efficiency.
              </li>
              <li>
                Integrated Cassandra for scalable data storage and RabbitMQ for asynchronous messaging between microservices.
              </li>
              <li>
                Deployed backend services on Azure Kubernetes Service (AKS) and managed continuous integration using Jenkins.
              </li>
            </ul>
          </Col>
        </Row>

        {/* Tufts Health */}
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <h2>Tufts Health</h2>
            <h4>Full Stack Java Developer</h4>
            <span className="duration">Dec 2019 – Mar 2021</span>
            <ul className="experience-list">
              <li>
                Developed a healthcare dashboard for real-time patient health data and insurance claims tracking.
              </li>
              <li>
                Created reusable React components with Hooks and Redux for managing state and real-time updates.
              </li>
              <li>
                Utilized RabbitMQ for real-time messaging between healthcare systems and MongoDB for storing patient data.
              </li>
              <li>
                Deployed the application on AWS with EC2 for compute resources and S3 for storing audit logs.
              </li>
            </ul>
          </Col>
        </Row>

        {/* City National Bank */}
        <Row style={{ marginBottom: "40px" }}>
          <Col>
            <h2>City National Bank</h2>
            <h4>Jr. Full Stack Java Developer</h4>
            <span className="duration">Mar 2018 – Dec 2019</span>
            <ul className="experience-list">
              <li>
                Developed a custom financial dashboard system to provide real-time insights into transaction trends and customer behavior.
              </li>
              <li>
                Implemented Java microservices with Spring Boot and integrated RabbitMQ for real-time transaction processing.
              </li>
              <li>
                Utilized Cassandra for scalable data storage and Azure Blob Storage for storing large reports.
              </li>
              <li>
                Managed CI/CD pipelines with Jenkins, integrating SonarQube for continuous code quality checks.
              </li>
            </ul>
          </Col>
        </Row>

        {/* Pramati Technologies Pvt Ltd */}
        <Row>
          <Col>
            <h2>Pramati Technologies Pvt Ltd</h2>
            <h4>Jr. Full Stack Java Developer</h4>
            <span className="duration">Apr 2016 – Mar 2018</span>
            <ul className="experience-list">
              <li>
                Participated in frontend development using HTML5, CSS3, and JavaScript, enhancing user interfaces for enterprise applications.
              </li>
              <li>
                Developed RESTful APIs using Spring Boot and optimized database queries using MySQL.
              </li>
              <li>
                Built microservices using Spring Boot and integrated RabbitMQ for asynchronous messaging between services.
              </li>
              <li>
                Automated testing with JUnit and Selenium, improving test coverage by 30%.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;

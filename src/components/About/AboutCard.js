import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Suraj Nuthanakalva</span>, a <span className="purple">Sr. Full Stack Java Developer</span> and <span className="purple">AWS Certified Solution Architect Associate</span> with over 8 years of experience designing and developing scalable, robust web applications. I specialize in backend development with <span className="purple">Java, Spring Boot,</span> and <span className="purple">Hibernate</span>, and I create dynamic, responsive front-end interfaces using <span className="purple">React.js</span> and <span className="purple">AngularJS</span>.
            <br />
            <br />
            My expertise extends to <span className="purple">cloud technologies</span> like AWS, where I deploy and manage scalable systems using services like EC2, Lambda, and S3. I also leverage <span className="purple">DevOps tools</span> such as Docker, Kubernetes, and Terraform to automate and streamline deployments, ensuring high availability and fault tolerance.
            <br />
            <br />
            I’m passionate about building microservices architectures and handling real-time data processing with <span className="purple">Apache Kafka</span> and <span className="purple">RabbitMQ</span>, as well as implementing CI/CD pipelines using <span className="purple">Jenkins</span> for efficient, automated workflows.
            <br />
            <br />
            When I'm not coding, I love exploring new technologies, continuously learning, and finding ways to improve development practices to deliver high-quality, innovative solutions.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by the passion to create impactful solutions, I continuously strive to push boundaries, learn new technologies, and build innovative products that make a difference."{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

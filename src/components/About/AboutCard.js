import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Suraj Nuthanakalva </span>
            a <span className="purple"> Full Stack Java Developer</span> with 5+ years of experience building scalable and efficient applications. I specialize in backend development with Java, Spring Boot, and Hibernate, while also creating responsive front-end interfaces using React.js and AngularJS.
            <br />
            <br/>
            I have hands-on expertise in AWS cloud services and DevOps tools like Docker, Kubernetes, and Terraform to ensure smooth and scalable deployments. I’m passionate about Agile development, delivering high-quality software through CI/CD pipelines with Jenkins and GitHub.
            <br/>

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

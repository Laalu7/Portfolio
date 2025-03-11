import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Spotify-Clone"
              description="Spotify-Clone build with react.js, Material-UI, and Firebase. Have features which allows user for realtime ads free music play, Download music, and many more."
              ghLink="https://github.com/Laalu7/Spotify-Clone"
              demoLink="https://idyllic-syrniki-6897f3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Faazi-Hub"
              description="Online Shoping build with  html, css, and js Buy Expensive cameras and lenses,Add to cart, and many more."
              ghLink="https://github.com/Laalu7/Faazi-Hub"
              demoLink="https://dulcet-douhua-36ba46.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Omnifood"
              description="Designed and deployed a responsive web application using modern web development tools. Focused on intuitive user interface design, seamless performance, and accessibility. "
              ghLink="https://github.com/Laalu7/Omnifood"
              demoLink="https://lucent-semifreddo-fd6a3c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Architect-Website"
              description="Innovative web developer with a passion for creating seamless, user-centric digital experiences. Skilled in modern web technologies and agile methodologies, I excel at turning complex challenges into intuitive, responsive solutions."
              ghLink="https://github.com/Laalu7/Architect-Website"
              demoLink="https://phenomenal-youtiao-3253d9.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="GYM-Dashboard"
              description="GYM Dashboard is a comprehensive web application designed to manage and visualizegymrelated data. The dashboard provides real-time insights into various metrics such as membershipstatistics, class schedules, and equipment usage. With anemphasis on userfriendly design, it allowsgym administrators to efficiently track andoptimize gym operations."
              ghLink="https://github.com/Laalu7/GYM-Dashboard"
              demoLink="https://vocal-pony-df6118.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

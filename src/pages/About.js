import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="">
        <h1>About</h1>
        <h2></h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1></h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              
            </p>
            <p>
              
            </p>
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

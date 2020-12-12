import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Demos() {
  return (
    <div>
      <Hero backgroundImage="../images/plannerEx.PNG">
        <h1>Demos</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Demos</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              D
            </p>
            <p>
              E
            </p>
            <p>
              F
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Demos;
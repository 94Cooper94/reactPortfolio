import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import coopHeadshot from "../components/images/coopHeadshot.jpeg"

function About() {
  return (
    <div>
      <Hero style={{ backgroundImage: `url(${coopHeadshot})` }}>
        <h1>About</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p class="light">My name is Cooper Ahearn and I am a <strong>full stack web developer</strong> who is making the most of prior successes in human relations & UI/UX design to create pertinent React applications. With a certificate in full stack web development from the University of Texas (January, 2021) and additional certificates in React & TypeScript acquired through Udemy, I am confident in my React.js, TypeScript, JavaScript/jQuery, and responsive web design aptitudes.</p><br />        
            <p class="light">Despite acquiring my undergraduate degree in Psychology from the University of Oregon, I discovered my passion for web development while satisifying the science requirements of my Bachelor's degree. I requested permission to enroll in computer science courses to satisfy my degree's math requirement and quickly discovered my backgrounds in art & tech as hobbies ignited natural talent & immense joy.</p><br />
            <p class="light">I am seeking to build on this passion with likeminded developers who share the common goal of creating beautiful applications that positively impact society. I am eager to leverage my unique perspective on the human mind, my extensive experience ensuring customer satisfaction, and my innate talent & passion for web development.</p><br />
            <p class="light">Feel free to peruse my page and have a gander at a few of my creations below. Methods of connecting with or contacting me are included in both the header & footer. Make yourself at home!</p>
            <table>
                <tbody>
                  <tr>
                    <th>React</th>
                    <th>TypeScript</th>
                    <th>JavaScript</th>
                    <th>jQuery</th>
                  </tr>
                  <tr>
                    <th>HTML5</th>
                    <th>CSS3</th>
                    <th>Node.JS</th>
                    <th>APIs</th>
                  </tr>
                  <tr>
                    <th>MySQL</th>
                    <th>Sequelize</th>
                    <th>MongoDB</th>
                    <th>Mongoose</th>
                  </tr>
                </tbody>
              </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;

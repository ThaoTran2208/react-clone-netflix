import React from "react";
import { Container, Row, Col } from "reactstrap";

import jumboData from "../fixtures/jumbo.json";
import "../css/Jumbotron.css";

function Jumbotron(props) {
  return (
    <Container className="Jumbotron" fluid={true}>
      {jumboData.map((item) => (
        <div key={item.id}>
          <Container>
            <Row
              className="jumbotron__container"
              style={{ flexDirection: `${item.direction}` }}
            >
              <Col xs="12" lg="7" className="jumbotron__pane">
                <h1 className="jumbotron__title">{item.title}</h1>
                <h2 className="jumbotron__subTitle">{item.subTitle}</h2>
              </Col>

              <Col xs="12" lg="5" className="jumbotron__pane">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="jumbotron__image"
                />
              </Col>
            </Row>
          </Container>

          <div className="jumbotron__border"></div>
        </div>
      ))}
    </Container>
  );
}

export default Jumbotron;

import React, { createContext, useContext, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import OptForm from "../components/OptForm";
import faqsData from "../fixtures/faqs.json";
import "../css/Faqs.css";

const ToggleContext = createContext();

function AccordionItem({ children }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Col xs="12" lg={{ size: 10, offset: 1 }} className="accordion__frame">
        <div className="accordion__item">{children}</div>
      </Col>
    </ToggleContext.Provider>
  );
}

function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <div
      className="accordion__header"
      onClick={() => setToggleShow(!toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img
          className="accordion__icon"
          src="/images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img
          className="accordion__icon"
          src="/images/icons/add.png"
          alt="Open"
        />
      )}
    </div>
  );
}

function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? (
    <div className="accordion__body" {...restProps}>
      {children}
    </div>
  ) : null;
}

function Faqs(props) {
  return (
    <Container fluid={true}>
      <Container className="accordion">
        <Row>
          <Col xs="12" className="accordion__title">
            <h1>Frequently Asked Questions</h1>
          </Col>

          {faqsData.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionHeader>{item.header}</AccordionHeader>
              <AccordionBody>{item.body}</AccordionBody>
            </AccordionItem>
          ))}

          <Col xs="12" lg={{ size: 10, offset: 1 }}>
            <OptForm />
          </Col>
        </Row>
      </Container>

      <div className="accordion__border"></div>
    </Container>
  );
}

export default Faqs;

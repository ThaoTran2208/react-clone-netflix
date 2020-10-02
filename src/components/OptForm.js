import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

import '../css/OptForm.css';

function OptForm(props) {
  return (
    <Form className="optForm">
      <h3 className="optForm__label">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <FormGroup className="optForm__group">
        <Input
          className="optForm__input"
          type="email"
          name="email"
          placeholder="Email address"
        ></Input>
        <Button className="optForm__button">GET STARTED</Button>
      </FormGroup>
    </Form>
  );
}

export default OptForm;

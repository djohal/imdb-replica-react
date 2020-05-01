import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AccountForm = () => {
  return (
    <Form noValidate>
      <Form.Group controlId="formBasicName">
        <div className="form-info">
          <Form.Label>Name:</Form.Label>
          <Form.Control plaintext readOnly defaultValue="Your Name" />
        </div>
        <Button type="button">Edit</Button>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <div className="form-info">
          <Form.Label>Email:</Form.Label>
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </div>
        <Button type="button">Edit</Button>
      </Form.Group>
      <Form.Group controlId="formBasicPass">
        <div className="form-info">
          <Form.Label>Password:</Form.Label>
          <Form.Control plaintext readOnly defaultValue="********" />
        </div>
        <Button type="button">Edit</Button>
      </Form.Group>
    </Form>
  );
};

export default AccountForm;

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AccountForm = () => {
  return (
    <Form noValidate>
      <span className="title">Login & Security</span>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control plaintext readOnly defaultValue="Your Name" />
        <Button type="button">
          Edit
        </Button>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control plaintext readOnly defaultValue="email@example.com" />
        <Button type="button">
          Edit
        </Button>
      </Form.Group>
      <Form.Group controlId="formBasicPass">
        <Form.Label>Password:</Form.Label>
        <Form.Control plaintext readOnly defaultValue="********" />
        <Button type="button">
          Edit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AccountForm;

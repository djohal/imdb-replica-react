import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../../../static/assets/logo.png";

const SignUp = () => (
  <div className="sign-up">
    <Helmet>
      <body class="light-bg"></body>
    </Helmet>
    <Container>
      <img src={Logo} alt="logo" />
      <Form>
        <span className="title"> Create account</span>
        <Form.Group controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="at least 8 characters" />
          <Form.Text className="text-muted">
            Passwords must be at least 8 characters.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicVerifyPassword">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="button">
          Create your IMDb account
        </Button>
        <div className="spacing"></div>
        <div className="divider-section">
          <div className="divider-inner"></div>
          <span>
            Already have an account? <Link to="/sign-in">Sign-in</Link>
          </span>
        </div>
      </Form>
    </Container>
    <div className="divider-section">
      <div className="divider-inner"></div>
    </div>
  </div>
);

export default SignUp;

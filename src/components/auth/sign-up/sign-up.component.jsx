import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Logo from "../../../static/assets/logo.png";
import SignUpForm from "./sign-up-form.component";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Helmet>
        <body class="light-bg"></body>
      </Helmet>
      <Container>
        <img src={Logo} alt="logo" />
        <div className="form-container">
          <SignUpForm />
          <div className="spacing"></div>
          <div className="divider-section">
            <div className="divider-inner"></div>
            <span>
              Already have an account? <Link to="/sign-in">Sign-in</Link>
            </span>
          </div>
        </div>
      </Container>
      <div className="divider-section">
        <div className="divider-inner"></div>
      </div>
    </div>
  );
};

export default SignUp;

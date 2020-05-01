import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";

import Logo from "static/assets/logo.png";
import EditAccountForm from "./edit-account-form.component";

const EditAccount = () => {
  return (
    <div className="edit-account">
      <div className="form-page">
        <Helmet>
          <body class="light-bg"></body>
        </Helmet>
        <Container>
          <img src={Logo} alt="logo" />
          <div className="main">
            <h3 className="title">Change your name</h3>
            <div className="form-container">
              <EditAccountForm />
              <div className="spacing"></div>
            </div>
          </div>
        </Container>
        <div className="divider-section">
          <div className="divider-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;

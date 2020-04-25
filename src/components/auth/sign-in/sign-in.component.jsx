import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import IMDbIcon from "../../../static/assets/brands/imdb.png";
import FacebookIcon from "../../../static/assets/brands/facebook.png";
import AmazonIcon from "../../../static/assets/brands/amazon.png";
import GoogleIcon from "../../../static/assets/brands/google.png";

const content = [
  {
    title: "Personalized Recommendations",
    subtitle: "Discover shows you'll love.",
  },
  {
    title: "Your Watchlist",
    subtitle:
      "Track everything you want to watch and receive e-mail when movies open in theaters.",
  },
  {
    title: "Your Ratings",
    subtitle: "Rate and remember everything you've seen.",
  },
  {
    title: "Contribute to IMDb",
    subtitle:
      "Add data that will be seen by millions of people and get cool badges.",
  },
];

const signInButtons = [
  {
    name: "IMDb",
    icon: IMDbIcon,
  },
  {
    name: "Amazon",
    icon: AmazonIcon,
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
  },
  {
    name: "Google",
    icon: GoogleIcon,
  },
];

const SignIn = () => (
  <div className="sign-in">
    <Container className="sign-in-container">
      <Row>
        <Col>
          <div className="options">
            <h3>Sign in</h3>
            <div className="buttons">
              {signInButtons.map(({ name, icon }, i) => (
                <div className="btn-container" key={i}>
                  <button>Sign in with {name}</button>
                  <img src={icon} alt="icon" />
                </div>
              ))}
            </div>
            <p className="divider-text">
              <span>or</span>
            </p>
            <button className="create-account-btn">Create a New Account</button>
            <span className="terms">
              By signing in, you agree to Conditions of Use and Privacy Policy.
            </span>
          </div>
        </Col>
        <Col>
          <div className="benefits">
            <h3>Benefits of your free IMDb account</h3>
            {content.map(({ title, subtitle }, index) => (
              <React.Fragment key={index}>
                <span>{title}</span>
                <p>{subtitle}</p>
              </React.Fragment>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    <Container className="recently-viewed-container">
      <Row>
        <h3>Recently Viewed</h3>
        <span>Clear your history</span>
      </Row>
    </Container>
  </div>
);

export default SignIn;

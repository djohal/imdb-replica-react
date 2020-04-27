import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast, Slide } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/layout/header/header.component";
import RegistrationPage from "./pages/registration/registration.component";
import SignUpPage from "./pages/sign-up/sign-up.component";
import SignInPage from "./pages/sign-in/sign-in.component";
import Footer from "./components/layout/footer/footer.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import NotFoundPage from "./pages/not-found/not-found-page.component";

toast.configure({
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Slide,
});

function App({ checkUserSession, currentUser }) {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/register/sign-in"
          render={() =>
            currentUser ? (
              <Redirect to="/" checkUserSession />
            ) : (
              <RegistrationPage />
            )
          }
        />
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" checkUserSession /> : <SignInPage />
          }
        />
        <Route
          path="/sign-up"
          render={() =>
            currentUser ? <Redirect to="/" checkUserSession /> : <SignUpPage />
          }
        />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />  
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

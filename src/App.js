import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast, Slide } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./components/homepage/homepage.component";
import Header from "./components/layout/header/header.component";
import SignIn from "./components/auth/sign-in/sign-in.component";
import SignUp from "./components/auth/sign-up/sign-up.component";
import Footer from "./components/layout/footer/footer.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

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
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" checkUserSession /> : <SignIn />
          }
        />
        <Route
          path="/sign-up"
          render={() =>
            currentUser ? <Redirect to="/" checkUserSession /> : <SignUp />
          }
        />
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

import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast, Slide } from "react-toastify";
import axios from "axios";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/layout/header/header.component";
import Footer from "./components/layout/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import AccountsPage from "./pages/account/account.component";
import EditAccount from "./components/edit-account/edit-account.component";
import ResetPassword from "./components/reset-password/reset-password.component";
import { messaging } from "./firebase/firebase.utils";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const RegistrationPage = lazy(() =>
  import("./pages/registration/registration.component")
);
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.component"));
const SignInPage = lazy(() => import("./pages/sign-in/sign-in.component"));
const WatchlistPage = lazy(() =>
  import("./pages/watchlist/watchlist.component")
);
const NotFoundPage = lazy(() =>
  import("./pages/not-found/not-found-page.component")
);
const ErrorBoundary = lazy(() =>
  import("./components/error-boundary/error-boundary.component")
);

toast.configure({
  position: "top-right",
  autoClose: 2000,
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
    let token;
    async function requestFirebase() {
      messaging
        .requestPermission()
        .then(async function () {
          token = await messaging.getToken();
          console.log(token);

          var notification = {
            title: "Portugal vs. Denmark",
            body: "5 to 1",
            icon: "",
            click_action: "http://localhost:8081",
          };

          var key =
            "AAAASoYyy3M:APA91bHIoDO_kXKS0s-_kvjb4tjoc15MB5INvf4_4cNdyqo3ynf0GLd-pQKyrBjsI3D3yp-sJ23fHejLSmOpq2aIgWbU7TfpVHgDl5hqzHx7K1EgUgi_p4eujj6ytMQcmdSIXtQI5Bah";

          fetch("https://fcm.googleapis.com/fcm/send", {
            method: "POST",
            headers: {
              Authorization: "key=" + key,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              notification: notification,
              to: token,
              webpush: {},
            }),
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.error(error);
            });
        })
        .catch(function (err) {
          console.log("Unable to get permission to notify.", err);
        });
      navigator.serviceWorker.addEventListener("message", (message) =>
        console.log(message)
      );
    }

    requestFirebase();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
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
                currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <SignInPage />
                )
              }
            />
            <Route
              path="/sign-up"
              render={() =>
                currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <SignUpPage />
                )
              }
            />
            <Route
              path="/watchlist"
              render={() =>
                !currentUser ? (
                  <Redirect to="/register/sign-in" checkUserSession />
                ) : (
                  <WatchlistPage />
                )
              }
            />
            <Route
              exact
              path="/account"
              render={() =>
                !currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <AccountsPage />
                )
              }
            />
            <Route
              path="/account/edit/:info"
              render={() =>
                !currentUser ? (
                  <Redirect to="/" checkUserSession />
                ) : (
                  <EditAccount />
                )
              }
            />
            <Route path="/account/reset-password" component={ResetPassword} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </ErrorBoundary>
      </Suspense>
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

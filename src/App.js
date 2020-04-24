import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import HomePage from "./components/homepage/homepage.component";
import Header from "./components/layout/header/header.component";
import SignIn from "./components/auth/sign-in/sign-in.component";
import Footer from "./components/layout/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

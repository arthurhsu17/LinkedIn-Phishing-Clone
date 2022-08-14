import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import React from "react";
import SignInForm from "./components/SignInForm.js";
import ForgotPage from "./components/ForgotPage.js";
import JoinNowPage from './components/JoinNowPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route path="/signin" component={SignInForm} />

          <Route exact path="/forgot" component={ForgotPage} />
          <Route exact path="/" component={ForgotPage} />

          <Route exact path="/join" component={JoinNowPage} />
          <Route exact path="/signin" component={JoinNowPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

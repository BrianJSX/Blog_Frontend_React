import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layouts from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      {isLogin === false ? (
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      ) : (
        <Layouts></Layouts>
      )}
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import PrivateRoute from "./features/PrivateRoute";
import UiLoading from "./features/UiLoading";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  const [loading, setLoading] = useState();
  const uiLoading = useSelector((state) => state.uiLoading.loading);

  useEffect(() => {
    const setLoadingIndex = () => {
      setLoading(uiLoading);
    };
    setLoadingIndex();
  });

  return (
    <div>
      <ToastContainer />
      {loading && <UiLoading></UiLoading>}
      <Router>
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <PrivateRoute>
            <DashboardPage></DashboardPage>
          </PrivateRoute>
          <Redirect from="/" to="/login" exact></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

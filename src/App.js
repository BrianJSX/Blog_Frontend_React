import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import PrivateRoute from "./features/PrivateRoute";
import UiLoading from "./features/UiLoading";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryAdminPage from './pages/CategoryAdmin/CategoryAdminPage';

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
    <div className="container">
      <ToastContainer />
      {loading && <UiLoading></UiLoading>}
      <Router>
        <Switch>
          <Redirect from="/" to="/login" exact></Redirect>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <PrivateRoute path="/admin/dashboard" exact>
            <DashboardPage></DashboardPage>
          </PrivateRoute>
          <PrivateRoute path="/admin/category" exact>
            <CategoryAdminPage></CategoryAdminPage>
          </PrivateRoute>
          <Route path="">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

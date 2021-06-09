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
import PrivateRouteAdmin from "./features/PrivateRouteAdmin";
import UiLoading from "./features/UiLoading";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryAdminPage from './pages/CategoryAdmin/CategoryAdminPage';
import PostAdminPage from "./pages/PostAdmin/PostAdminPage";
import HomePage from "./pages/HomePage/HomePage";
import PostDetail from "./pages/PostDetail";
import CategoryIndex from "./pages/CategoryIndex";

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
          <Redirect from="/" to="/home" exact></Redirect>
          <Redirect from="/admin" to="/admin/dashboard" exact></Redirect>
          
          <PrivateRoute path="/home" exact>
            <HomePage />
          </PrivateRoute>

          <PrivateRoute path="/home/category/:categoryCode" exact>
            <CategoryIndex />
          </PrivateRoute>

          <PrivateRoute path="/home/post/:newsId" exact>
            <PostDetail />
          </PrivateRoute>
          
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>

          <PrivateRouteAdmin path="/admin/dashboard" exact>
            <DashboardPage></DashboardPage>
          </PrivateRouteAdmin>

          <PrivateRouteAdmin path="/admin/category" exact>
            <CategoryAdminPage></CategoryAdminPage>
          </PrivateRouteAdmin>

          <PrivateRouteAdmin path="/admin/post" exact>
            <PostAdminPage></PostAdminPage>
          </PrivateRouteAdmin>

          <Route path="">
            <NotFoundPage></NotFoundPage>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

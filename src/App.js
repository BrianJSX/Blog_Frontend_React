import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss";
import Layouts from "./components/Layout";
import UiLoading from "./features/UiLoading";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from 'react-toastify';

function App() {
  const [isLogin] = useState(false);
  const [loading, setLoading] =  useState();
  const uiLoading = useSelector((state) => state.uiLoading.loading );

  useEffect(() => {
    const setLoadingIndex = () => { 
      setLoading(uiLoading);
    }
    setLoadingIndex();
  });

  return (
    <Router>
      <ToastContainer />
      {loading && <UiLoading></UiLoading> }
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

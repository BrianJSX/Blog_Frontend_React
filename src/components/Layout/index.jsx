import { Layout } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import MenuItem from "../Menu";
import HeaderLayout from "../Header";
import "./style.scss";

const { Content, Footer, Sider } = Layout;

function Layouts() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <img
          className="logo"
          src="https://www.designevo.com/images/home/2-5-0/blue-shield-and-banner-emblem.webp"
          alt=""
        />
        <MenuItem></MenuItem>
      </Sider>
      <Layout className="site-layout">
        <HeaderLayout></HeaderLayout>
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Redirect from="/" exact to="/dashboard"></Redirect>
            <Redirect from="/login" to="/dashboard" />
            <Redirect from="/register" to="/dashboard" />
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/category">
              <DashboardPage />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Layouts;

import { Layout } from "antd";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import MenuItem from "../Menu";
import Header from '../Header';
import "./style.scss";

const { Content, Footer, Sider } = Layout;

function Layouts() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <MenuItem></MenuItem>
      </Sider>
      <Layout className="site-layout">
        <Header></Header>
        <Content style={{ margin: "0 16px" }}>
          <Switch>
            <Redirect from="/login" to="/admin" />
            <Redirect from="/register" to="/admin" />
            <Route path="/admin">
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

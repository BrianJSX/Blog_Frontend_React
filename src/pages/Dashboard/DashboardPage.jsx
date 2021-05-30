import Layout, { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";
import HeaderLayout from "../../components/Header";
import MenuItem from "../../components/Menu";
import "./style.scss";

function DashboardPage() {
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
          <Link to="/login">sadadsadsadsadsada</Link>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;

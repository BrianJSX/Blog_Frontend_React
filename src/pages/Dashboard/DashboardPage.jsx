import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import HeaderLayout from "../../components/Header";
import MenuItem from "../../components/Menu";
import Chart from '../../features/Chart';
import "./style.scss";

function DashboardPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuItem></MenuItem>
      <Layout className="site-layout">
        <HeaderLayout></HeaderLayout>
        <Content style={{ margin: "30px 30px" }}>
          <Chart></Chart>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;

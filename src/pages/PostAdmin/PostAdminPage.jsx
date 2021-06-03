import React from "react";
import "./style.scss";
import PostAdminForm from "../../features/PostAdminForm";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import MenuItem from "../../components/Menu";
import HeaderLayout from "../../components/Header";
import { Col, Row } from "antd";

function PostAdminPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
    <MenuItem></MenuItem>
    <Layout className="site-layout">
      <HeaderLayout></HeaderLayout>
      <Content style={{ margin: "30px 20px" }}>
        <Row>
            <PostAdminForm></PostAdminForm>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  );
}

export default PostAdminPage;

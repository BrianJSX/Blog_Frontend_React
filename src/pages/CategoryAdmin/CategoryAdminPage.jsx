import { Col, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HeaderLayout from "../../components/Header";
import MenuItem from "../../components/Menu";
import CategoryAdminList from "../../features/CategoryAdminList";
import FormAddCategory from "../../features/FormAddCategory";
import "./style.scss";
import { fetchCategory } from "../../features/CategoryAdminList/categorySlice";

function CategoryAdminPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuItem></MenuItem>
      <Layout className="site-layout">
        <HeaderLayout></HeaderLayout>
        <Content style={{ margin: "30px 20px" }}>
          <Row>
            <Col span={8}>
              <FormAddCategory></FormAddCategory>
            </Col>
            <Col style={{overflow: "scroll", width: 300, height: 300}} span={16}>
              <CategoryAdminList></CategoryAdminList>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default CategoryAdminPage;

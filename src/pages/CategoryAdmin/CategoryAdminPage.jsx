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
  const [idUpdate, setIdUpdate] = useState(null);
  const [code, setCode] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const onHandleUpdate = async (id, code, name) => { 
    await setIdUpdate(id);
    await setCode(code);
    await setName(name);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuItem></MenuItem>
      <Layout className="site-layout">
        <HeaderLayout></HeaderLayout>
        <Content style={{ margin: "30px 20px" }}>
          <Row>
            <Col span={8}>
              <FormAddCategory idUpdate={idUpdate} name={name} code={code} onUpdate={onHandleUpdate}></FormAddCategory>
            </Col>
            <Col style={{overflow: "scroll", width: 500, height: 500}} span={16}>
              <CategoryAdminList onUpdate={onHandleUpdate}></CategoryAdminList>
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

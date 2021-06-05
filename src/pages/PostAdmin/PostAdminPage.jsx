import { Button, Col, Row } from "antd";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HeaderLayout from "../../components/Header";
import MenuItem from "../../components/Menu";
import PostAdminForm from "../../features/PostAdminForm";
import PostAdminList from "../../features/PostAdminList";
import { fetchPost } from "../../features/PostAdminList/postSlice";
import "./style.scss";

function PostAdminPage() {
  const dispatch = useDispatch();
  const [openPost, setOpenPost] = useState(true);

  const onHandleAdd = () => {
    setOpenPost(true);
  };

  const onHandleList = () => {
    setOpenPost(false);
  };

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MenuItem></MenuItem>
      <Layout className="site-layout">
        <HeaderLayout></HeaderLayout>
        <Content style={{ margin: "30px 20px" }}>
          <Row style={{ margin: 20 }}>
            <Button onClick={onHandleAdd}>Thêm bài viết</Button>
            <Button onClick={onHandleList}>Tất cả bài viết</Button>
          </Row>
          <Row>
            {openPost === true ? (
              <Col span={24}>
                <PostAdminForm></PostAdminForm>
              </Col>
            ) : (
              <Col span={24}>
                <PostAdminList></PostAdminList>
              </Col>
            )}
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default React.memo(PostAdminPage);

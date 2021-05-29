import { Col, Row } from "antd";
import React from "react";
import FormLogin from "../features/FormLogin/index";

function Login() {
  return (
    <div>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col span={6}></Col>
        <Col span={8}>
          <FormLogin></FormLogin>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}

export default Login;

import { Col, Row } from "antd";
import React from "react";
import FormRegister from "../features/FormRegister";

function RegisterPage() {
  return (
    <Row justify="center" style={{marginTop: 100  }}>
      <Col span={6}></Col>
      <Col span={8}>
        <FormRegister></FormRegister>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
}

export default RegisterPage;

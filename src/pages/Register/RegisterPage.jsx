import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import FormRegister from "../../features/FormRegister";

function RegisterPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token != null) { 
      return history.push("/admin/dashboard");
    }
  });

  if(token != null) { 
    history.push("/admin/dashboard");
  }
  
  return (
    <Row justify="center" style={{ marginTop: 100 }}>
      <Col span={6}></Col>
      <Col span={8}>
        <FormRegister></FormRegister>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
}

export default RegisterPage;

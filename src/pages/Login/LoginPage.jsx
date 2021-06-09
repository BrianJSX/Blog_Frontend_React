import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import FormLogin from "../../features/FormLogin/index";

function Login() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token != null) { 
      return history.push("/home");
    }
  });

  if(token != null) { 
    history.push("/home");
  }

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

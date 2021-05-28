import { Alert, Button, Form, Input } from "antd";
import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function FormRegister() {
  const [data, setData] = useState();
  const [errorPass, setErrorPass] = useState(false);

  const onFinish = (values) => {
    if (values.password === values.repassword) {
      setData(values);
      console.log(data);
    } else {
      setErrorPass(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formRegister">
      <div className="formRegister__title">Đăng Kí Tài Khoản</div>
      {errorPass === true ? <Alert style={{marginTop: 20}} message="Mật khẩu không khớp" type="error" /> : ""}
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginRight: 30, marginTop: 30 }}
      >
        <Form.Item
          label="FirstName"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="LastName"
          name="lastname"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="RePassword"
          name="repassword"
          rules={[{ required: true, message: "Please input your RePassword!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div className="formLogin__goto">
          <Link to="/login">Quay lại đăng nhập</Link>
        </div>
      </Form>
    </div>
  );
}

export default FormRegister;

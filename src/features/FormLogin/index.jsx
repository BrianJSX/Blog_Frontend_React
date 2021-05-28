import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
function FormLogin() {
  const [account, setAccount] = useState();

  const onFinish = (values) => {
    setAccount(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formLogin">
      <div className="formLogin__title">Đăng Nhập Tài Khoản</div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginRight: 30, marginTop: 30 }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <div className="formLogin__goto">
          <Link to="/register">Đăng kí thành viên</Link>
        </div>
      </Form>
    </div>
  );
}

export default FormLogin;

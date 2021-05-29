import { Button, Form, Input } from "antd";
import { pick } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { fetchAccount } from "./registerSlice";
import "./style.scss";
 

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function FormRegister() {
  
  const dispatch = useDispatch();
  
  const onFinish =  (values) => {
    if (values.password === values.repassword) {
      const validateValue = pick(values, ['login', 'password']);
      dispatch(fetchAccount(validateValue));
    } else {
      toast.error("Mật khẩu không khớp !", {
        position: toast.POSITION.TOP_RIGHT
      });;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="formRegister">
      <div className="formRegister__title">Đăng Kí Tài Khoản</div>
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
          name="login"
          rules={[{ required: true, message: "Please input your first name!" }]}
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

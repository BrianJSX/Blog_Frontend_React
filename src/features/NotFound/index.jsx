import React from "react";
import "./style.scss";
import { Result } from "antd";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link type="primary" to="/login">Ấn để quay lại</Link>}
    />
  );
}

export default NotFound;

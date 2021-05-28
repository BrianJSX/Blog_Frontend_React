import React from "react";
import { Layout } from "antd";
import "./style.scss";
import { Button } from "antd";

function HeaderLayout() {
  const { Header } = Layout;

  return (
    <Header style={{ padding: 0 }}>
      <div className="header">
        <div className="header__action">
          <div className="header__action__lable"> Admin</div>
          <div className="header__action__button">
            <Button type="primary">Logout</Button>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderLayout;

import React from "react";
import { Layout } from "antd";
import "./style.scss";
import { Button } from "antd";
import Search from "../Search";

function HeaderLayout() {
  const { Header } = Layout;

  return (
    <Header className="header">
      <div className="header__search">
        <Search></Search>
      </div>
      <div className="header__action">
        <div className="header__action__lable"> Admin</div>
        <div className="header__action__button">
          <Button type="primary">Logout</Button>
        </div>
      </div>
    </Header>
  );
}

export default HeaderLayout;

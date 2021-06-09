import React from "react";
import { Layout } from "antd";
import "./style.scss";
import { Button } from "antd";
import Search from "../Search";
import { useHistory } from "react-router";
import { Avatar } from 'antd';

function HeaderLayout() {
  const { Header } = Layout;
  const username = localStorage.getItem("username");
  const history = useHistory();
  
  const onHandelLogout = async () => { 
    await localStorage.removeItem("username");
    await localStorage.removeItem("token");
    await localStorage.removeItem("role");
    return history.push('/login');
  };

  return (
    <Header className="header">
      <div className="header__search">
        <Search></Search>
      </div>
      <div className="header__action">
        <div className="header__action__avatar">    
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{username}</Avatar>
        </div>
        <div className="header__action__lable"> {username} </div>
        <div className="header__action__button">
          <Button onClick={onHandelLogout} type="primary">Logout</Button>
        </div>
      </div>
    </Header>
  );
}

export default HeaderLayout;

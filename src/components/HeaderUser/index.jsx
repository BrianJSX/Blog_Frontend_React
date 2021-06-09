import React, { useEffect } from "react";
import "./style.scss";
import { Avatar, Button } from "antd";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import useSelectCategory from "../../hooks/useSelectCategory";
import { Link, useHistory } from "react-router-dom";

function HeaderIndex() {
  const { Search } = Input;
  const categories = useSelectCategory();
  const history = useHistory();
  const username = localStorage.getItem("username");

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onHandelLogout = async () => { 
    await localStorage.removeItem("username");
    await localStorage.removeItem("token");
    return history.push('/login');
  };

  return (
    <div class="header">
      <div className="header-nav">
        <div className="header-account">
          <div className="header-account__info">
            <span>
              <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                {username}
              </Avatar>
            </span>
            <span style={{ marginLeft: 5 }}>{username}</span>
          </div>
          <div className="header-account__action">
            <Button type="primary" onClick={onHandelLogout}> Logout</Button>
          </div>
        </div>
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/home">Home</Link>
          </li>
          {categories != null
            ? categories.map((category, index) => {
                return (
                  <li key={index} className="header-li">
                    <Link to={"/home/category/" + category.code}>
                      {category.name}
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>
        <div class="header-logo">
          <img
            width="250px"
            src="https://www.hutech.edu.vn/imgnews/homepage/stories/hinh34/logo%20CMYK-01.png"
            alt=""
          />
        </div>
        <div className="header-subcribe">
          <div className="header-subcribe__title">Subscribe for newsletter</div>
          <div className="header-subcribe__search">
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              suffix={suffix}
            />
          </div>
        </div>
        <div className="header-copyright">
          Copyright © 2021 All rights reserved
        </div>
      </div>
    </div>
  );
}

export default HeaderIndex;

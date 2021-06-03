import {
  SwitcherFilled,
  PieChartOutlined,
  BookFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

function MenuItem() {
  // const { SubMenu } = Menu;
  return (
    <Sider id="components-layout-demo-side" collapsible>
      <div className="logo">
        OnionDev
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SwitcherFilled />}>
          <Link to="/admin/category">Danh mục</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BookFilled />}>
          <Link to="/admin/post">Bài viết</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to="/admin/category">Thành viên</Link>
        </Menu.Item>
        {/* <SubMenu key="sub2" icon={<UserOutlined />} title="Bài viết">
          <Menu.Item key="4">Thêm bài viết</Menu.Item>
          <Menu.Item key="5">Tất cả bài viết</Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}

export default MenuItem;

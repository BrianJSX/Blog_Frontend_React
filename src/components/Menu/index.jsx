import {
    SwitcherFilled,
    PieChartOutlined,
    BookFilled,
    UserOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import React from 'react';

function MenuItem() {
    const { SubMenu } = Menu;
    return (
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<SwitcherFilled />} title="Danh mục">
            <Menu.Item key="3">Tất cả danh mục</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<BookFilled />} title="Bài viết">
            <Menu.Item key="4">Thêm bài viết</Menu.Item>
            <Menu.Item key="5">Tất cả bài viết</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Thành viên">
            <Menu.Item key="6">Tất cả bài viết</Menu.Item>
          </SubMenu>
        </Menu>
    )
}

export default MenuItem;

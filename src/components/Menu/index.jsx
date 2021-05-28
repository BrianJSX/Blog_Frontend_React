import {
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import React from 'react';

function MenuItem() {
    const { SubMenu } = Menu;
    return (
        <Menu style={{marginTop: 60}} theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Danh mục">
            <Menu.Item key="2">Thêm danh mục</Menu.Item>
            <Menu.Item key="3">Tất cả danh mục</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Bài viết">
            <Menu.Item key="4">Thêm bài viết</Menu.Item>
            <Menu.Item key="5">Tất cả bài viết</Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
    )
}

export default MenuItem;

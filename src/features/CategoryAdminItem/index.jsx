import { Popconfirm, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCategory } from "../CategoryAdminList/categorySlice";

function CategoryAdminItem(props) {
  const dispatch = useDispatch();

  const item = props.category;
  const stt = props.stt;

  const confirm = (id) => {
    dispatch(removeCategory(id));
  };

  return (
    <tr>
      <td>{stt + 1}</td>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>
        <Button type="primary" onClick={() => props.onUpdateCate(item.id, item.code, item.name)}>Sửa</Button>
        <Popconfirm
          placement="topLeft"
          title="Bạn có muốn xóa danh mục này không ??"
          onConfirm={() => confirm(item.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">xóa</Button>
        </Popconfirm>
        
      </td>
    </tr>
  );
}

export default CategoryAdminItem;

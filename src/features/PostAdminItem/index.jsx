import { Button, Popconfirm } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../PostAdminList/postSlice";

function PostAdminItem(props) {
  const stt = props.stt;
  const post = props.post;
  const dispatch = useDispatch();

  const confirm = (id) => {
      dispatch(removePost(id));
  };
  
  return (
    <tr>
      <td>{stt + 1}</td>
      <td>{post.title}</td>
      <td>{post.shortDescription}</td>
      <td>
        <Button type="primary">Sửa</Button>
        <Popconfirm
          placement="topRight"
          title="Bạn có muốn xóa bài viết này không??"
          onConfirm={() => confirm(post.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">Xóa</Button>
        </Popconfirm>
      </td>
    </tr>
  );
}

export default PostAdminItem;

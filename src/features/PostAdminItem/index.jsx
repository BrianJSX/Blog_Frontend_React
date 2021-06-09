import { Button, Popconfirm } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { removePost } from "../PostAdminList/postSlice";

function PostAdminItem(props) {
  const stt = props.stt;
  const post = props.post;
  const news = props.news;
  const dispatch = useDispatch();

  const dataPost = {
    id: news.id,
    title: news.title,
    shortDescription: news.shortDescription,
    content : news.content,
    category_id: post.id
  }

  const confirm = (id) => {
      dispatch(removePost(id));
  };
  
  return (
    <tr>
      <td>{stt + 1}</td>
      <td>{news.title}</td>
      <td>{news.shortDescription}</td>
      <td>{post.name}</td>
      <td>
        <Button onClick={() => props.onUpdate(dataPost)} type="primary">Sửa</Button>
        <Popconfirm
          placement="topRight"
          title="Bạn có muốn xóa bài viết này không??"
          onConfirm={() => confirm(news.id)}
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

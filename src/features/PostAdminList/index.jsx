import React from "react";
import { useSelector } from "react-redux";
import PostAdminItem from "../PostAdminItem";
import "./style.scss";

function PostAdminList({ onUpdate }) {
  const posts = useSelector((state) => state.post.data);

  return (
    <div className="postList">
      <table id="post">
        <thead>
          <tr>
            <th>id</th>
            <th>Tên bài viết</th>
            <th>Mô tả ngắn</th>
            <th>Tên danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts !== null
            ? posts.map((post, index) => {
                return post.news.map((news, index) => {
                  return (
                    <PostAdminItem
                      onUpdate={onUpdate}
                      key={index}
                      post={post}
                      news={news}
                      stt={index}
                    ></PostAdminItem>
                  );
                });
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(PostAdminList);

import React from "react";
import { useSelector } from "react-redux";
import PostAdminItem from "../PostAdminItem";
import "./style.scss";

function PostAdminList() {
  const posts = useSelector((state) => state.post.data);

  return (
    <div className="postList">
      <table id="post">
        <thead>
          <tr>
            <th>id</th>
            <th>Tên bài viết</th>
            <th>Mô tả ngắn</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts !== null
            ? posts.map((posts, index) => {
                return <PostAdminItem key={index} post={posts} stt={index}></PostAdminItem>;
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(PostAdminList);

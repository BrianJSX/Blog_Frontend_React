import React from "react";
import "./style.scss";
import { Avatar } from "antd";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FolderIcon from "@material-ui/icons/Folder";
import { Link } from "react-router-dom";

function PostHome(props) {
  const category = props.category;
  const news = props.news;
  return (
    <div className="postHome">
      <div className="postHome__post">
        <div className="postHome__post-image">
          <Avatar
            size={200}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
        <div className="postHome__post__content">
          <div className="postHome__post__content-title">
            {news.title}
          </div>
          <div className="postHome__post__content-date">
            <div class="postHome__post-icon">
              <span>
                <EventAvailableIcon />
              </span>
              <span> June 28, 2019</span>
            </div>
            <div class="postHome__post-icon">
              <span>
              <FolderIcon></FolderIcon>
              </span>
              <span> {category.name}</span>
            </div>
          </div>
          <div className="postHome__post__content-description">
            {news.shortDescription}
          </div>
          <div className="postHome__post__content-action">
            <Link to={`/home/post/${news.id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostHome;

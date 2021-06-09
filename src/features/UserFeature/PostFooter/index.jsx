import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "antd/lib/avatar/avatar";
import { Link } from "react-router-dom";

function PostFooter(props) {
  return (
    <div className="footer__post">
      <div className="footer__post__image">
        <Avatar
          size={100}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </div>
      <div className="footer__post__main">
        <div className="footer__post__main-title">
          <Link to={`/home/post/${props.post.id}`}>{props.post.title}</Link>
        </div>
        <div className="footer__post__main-date">
          <div>
            <DateRangeIcon></DateRangeIcon>
          </div>
          <div>June 28, 2019</div>
        </div>
        <div className="footer__post__main-author">
          <div>
            <AccountCircleIcon></AccountCircleIcon>
          </div>
          <div>Admin</div>
        </div>
      </div>
    </div>
  );
}

export default PostFooter;

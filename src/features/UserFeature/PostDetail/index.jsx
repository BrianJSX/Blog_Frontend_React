import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./style.scss";

function PostDetail(props) {
  return (
    <div className="postDetail">
      <div className="postDetail__header">
        <div className="postDetail__header-avatar">
          <Avatar
            size={200}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
        <div className="postDetail__header__main">
            <div className="postDetail__header__main-title">
                {props.post.title}
            </div>
            <div className="postDetail__header__main-date">
                <div>
                  <DateRangeIcon></DateRangeIcon>
                </div>
                <div>
                   june, 29th , 2021
                </div>
            </div>
            <div className="postDetail__header__main-author">
                <div>
                  <AccountCircleIcon></AccountCircleIcon>
                </div>
                <div>
                   Admin
                </div>
            </div>
        </div>
      </div>
      <div className="postDetail__main" dangerouslySetInnerHTML={{__html: props.post.content}}/>
    </div>
  );
}

export default PostDetail;

import React from "react";
import "./style.scss";
import { Input } from "antd";
import PostFooter from "../../features/UserFeature/PostFooter";
import {orderBy} from "lodash";
import useSelectCategory from "../../hooks/useSelectCategory";

function Footer(props) {
  const { Search } = Input;
  const categories = useSelectCategory();
  return (
    <div>
      <div className="footer">
        <div className="footer__search">
          <Search placeholder="Tìm kiếm bài viết" style={{ width: 200 }} />
        </div>
        <div className="footer__title">Thống kê danh mục</div>
        <div className="footer__category">
          <ul className="footer__category-ul">
            {
              categories != null ? 
              categories.map((category, index) => { 
                return (
                  <li key={index} className="footer__category-li">
                    <div>{category.name}</div>
                    <div>({category.news.length})</div>
                  </li>
                )
              }) : ""
            }
          </ul>
        </div>
        <div className="footer__title">Bài viết mới</div>
        <div className="footer--content">
          {
            categories != null ? 
            categories.map((category) => { 
              const postSort = orderBy(category.news, ["id"], ["desc"]);
              return postSort.map((post, index) => { 
                return <PostFooter key={index} category={category} post={post}></PostFooter>
              });
            }) : ""
          }
        </div>
        <div className="footer__info"></div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../CategoryAdminItem";
import "./style.scss";

function CategoryAdminList(props) {
  const category = useSelector((state) => state.category.data);
  
  return (
    <div className="categoryList">
      <table id="customers">
        <thead>
          <tr>
            <th>id</th>
            <th>Đường dẫn</th>
            <th>Tên danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {category !== null ? (
            category.map((category, index) => {
              return (
                <CategoryItem
                  key={index}
                  stt={index}
                  category={category}
                ></CategoryItem>
              );
            })
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(CategoryAdminList);

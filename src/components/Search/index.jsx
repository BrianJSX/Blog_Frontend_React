import React from "react";
import { Input } from "antd";
import './style.scss';

function Search() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="Tìm bài viết"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      style={{marginLeft: 20, paddingRight: 20, width: 500}}
    />
  );
}

export default Search;

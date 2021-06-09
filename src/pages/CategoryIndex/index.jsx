import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import categoryApi from "../../api/categoryApi";
import Footer from "../../components/FooterUser";
import Header from "../../components/HeaderUser";
import { filter } from "lodash";
import PostHome from "../../features/UserFeature/PostHome";
import UiLoadingHome from "../../features/UserFeature/UiLoadingHome";

function CategoryIndex() {
  const { categoryCode } = useParams();
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPostInCate = async () => {
    const data = await categoryApi.getAllCategoryIndex();
    const validateData = filter(data, function (o) {
      return o.code == categoryCode;
    });
    setCategories(validateData);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true); 
    setTimeout(() => {
      fetchPostInCate();
    }, 4000);
  }, [categoryCode]);

  return (
    <div className="homepage">
      <Row>
        <Col span={6}>
          <Header></Header>
        </Col>
        <Col span={13}>
          {loading == true ? <UiLoadingHome></UiLoadingHome> : ""}
          {categories != null
            ? categories.map((category) => {
                return category.news.map((news, index) => {
                  return (
                    <PostHome
                      key={index}
                      category={category}
                      news={news}
                    ></PostHome>
                  );
                });
              })
            : ""}
        </Col>
        <Col span={6}>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
}

export default CategoryIndex;

import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import categoryApi from "../../api/categoryApi";
import Footer from "../../components/FooterUser";
import Header from "../../components/HeaderUser";
import PostHome from "../../features/UserFeature/PostHome";
import UiLoadingHome from "../../features/UserFeature/UiLoadingHome";
import { useParams } from "react-router";
import {filter} from "lodash";

function HomePage() {
  const [categories, setCategories] = useState();
  const { categoryId } = useParams();
  console.log(categoryId);

  const fetchCategory = async () => {
    const resp = await categoryApi.getAllCategoryIndex();
    if(categoryId != null ) { 
      const postInCate = filter(resp, function(o) { return o.id == categoryId ; });
      setCategories(postInCate);
    } else { 
      setCategories(resp);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCategory();
    }, 4000);
  }, []);

  return (
    <div className="homepage">
      <Row>
        <Col span={6}>
          <Header></Header>
        </Col>
        <Col span={13}>
          {categories != null ? (
            categories.map((category) => {
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
          ) : (
            <UiLoadingHome></UiLoadingHome>
          )}
        </Col>
        <Col span={6}>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;

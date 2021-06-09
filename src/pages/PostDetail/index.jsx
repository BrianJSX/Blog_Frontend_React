import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import postApi from "../../api/postApi";
import Footer from "../../components/FooterUser";
import Header from "../../components/HeaderUser";
import PostDetail from "../../features/UserFeature/PostDetail";
import UiLoadingHome from "../../features/UserFeature/UiLoadingHome";
import { filter } from "lodash";
import "./style.scss";

function PostDetailPage() {
  const { newsId } = useParams();
  const [post, setPost] = useState();
  const [loading , setLoading] =  useState(true);
  const history = useHistory();

  const fetchData = async () => {
    const resp = await postApi.getPost();
    const validateData = filter(resp, function(o) { return o.id == newsId; })
    if(validateData.length < 1) { 
      await history.push("/home");
    } else { 
      await setPost(validateData);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [newsId]);

  return (
    <div className="post">
      <Row>
        <Col span={6}>
          <Header></Header>
        </Col>
        <Col span={13}>
          { loading == true ? <UiLoadingHome></UiLoadingHome> : "" }
          { 
            post != null ?  
            post.map((post, index) => { 
              return <PostDetail key={index} post={post} />
            }) : ""
          }
        </Col>
        <Col span={6}>
          <Footer></Footer>
        </Col>
      </Row>
    </div>
  );
}

export default PostDetailPage;

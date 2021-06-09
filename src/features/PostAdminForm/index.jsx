import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFetchCategory from "../../hooks/useFetchCategory";
import { createPost, updatePost } from "../PostAdminList/postSlice";
import "./style.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function PostAdminList({ dataPost, onResetPost }) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const dispatch = useDispatch();
  const category = useFetchCategory();

  useEffect(() => {
    if (dataPost != null) {
      form.setFieldsValue({
        news_id: dataPost.id,
        title: dataPost.title,
        shortDescription: dataPost.shortDescription,
        content: dataPost.content,
        category_id: dataPost.category_id,
      });
    } else { 
      form.resetFields();
    }
  }, [dataPost]);

  const onFinish = (values) => {
    if(dataPost != null ) { 
      dispatch(updatePost(values));
      onResetPost()
    } else { 
      dispatch(createPost(values));
      onResetPost()
    }
  };

  const onChangeSelect = (value) => {
    form.setFieldsValue({
      category_id: value,
    });
  };

  return (
    <div className="postAdd">
      <div className="postAdd-form">
        {dataPost != null ? (
          <Button style={{margin: 20}} type="primary" onClick={onResetPost}>
            Ấn để thêm bài viết
          </Button>
        ) : (
          ""
        )}
        <Form
          style={{ width: 1000 }}
          layout="horizontal"
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
        >
          {dataPost != null ? (
            <Form.Item
              name="news_id"
              label="ID bài viết"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input disabled={true} />
            </Form.Item>
          ) : (
            ""
          )}

          <Form.Item
            name="title"
            label="Tiêu đề"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="shortDescription"
            label="Mô tả"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category_id"
            label="Danh mục"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Chọn danh mục"
              optionFilterProp="children"
              onChange={onChangeSelect}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {category != null
                ? category.map((category, index) => {
                    return (
                      <Option key={index} value={category.id}>
                        {category.name}
                      </Option>
                    );
                  })
                : ""}
            </Select>
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <CKEditor
              editor={ClassicEditor}
              data={dataPost != null ? dataPost.content : ""}
              onBlur={(event, editor) => {
                const data = editor.getData();
                form.setFieldsValue({
                  content: data,
                });
              }}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default PostAdminList;

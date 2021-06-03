import React from "react";
import { Button, Form, Input, Select  } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
function PostAdminList() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values) => {
    console.log(values);
  };

  function onChangeSelect(value) {
    form.setFieldsValue({
      category_id: value,
    });
  }

  return (
    <div className="post">
      <Form
        style={{ width: 1000 }}
        layout="horizontal"
        className="formCategory__input"
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Tiêu đề bài viết"
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
          label="Mô tả ngắn"
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
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          ,
        </Form.Item>
        <Form.Item
          name="content"
          label="Content Bài viết"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
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
  );
}

export default PostAdminList;

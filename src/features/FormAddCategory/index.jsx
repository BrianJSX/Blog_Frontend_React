import { Button, Form, Input } from "antd";
import { deburr, kebabCase } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../CategoryAdminList/categorySlice";
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

function FormAddCategory() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    values["code"] = deburr(values.code);
    values["code"] = kebabCase(values.code);
    dispatch(createCategory(values));
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      code: "the-thao",
      name: "thể thao",
    });
  };

  return (
    <div>
      <div className="formAddCategory">
        <div className="formAddCategory__title">
            Thêm danh mục
        </div>
      </div>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="code"
          label="Đường dẫn"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên danh mục"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormAddCategory;

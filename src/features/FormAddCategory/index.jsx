import { Button, Form, Input } from "antd";
import { deburr, kebabCase } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  createCategory,
  updateCategory,
} from "../CategoryAdminList/categorySlice";
import "./style.scss";
import removeVietnameseTones from '../../convertVN';

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

function FormAddCategory({ idUpdate, onUpdate, name, code }, props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [id, setId] = useState();

  const onFinish = (values) => {
    values["code"] = removeVietnameseTones(values.code);
    values["code"] = deburr(values.code);
    values["code"] = kebabCase(values.code);
    if (values.id != null) {
      dispatch(updateCategory(values));
    } else {
      dispatch(createCategory(values));
    }
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

  useEffect(() => {
    setId(idUpdate);
    form.setFieldsValue({
      id: idUpdate,
      name: name,
      code: code,
    });
  }, [idUpdate, name, code]);

  return (
    <div className="formAddCategory">
      {id !== null ? (
        <Button type="primary" onClick={() => onUpdate(null, null, null)}>
          Thêm danh mục
        </Button>
      ) : (
        ""
      )}

      <div className="formAddCategory__title">
        {id == null ? "Thêm Danh Mục" : "Sửa danh mục"}
      </div>

      <Form className="formCategory__input" {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        {id != null ? (
          <Form.Item
            name="id"
            label="ID update"
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

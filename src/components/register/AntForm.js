import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
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

const { Option } = Select;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
  },
};

const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }],
};

const AntForm = ({ teacher, center, student, getInputs }) => {
  const [loading, setloading] = useState(false);
  const [specialisation, setSpec] = useState("");

  const onFinish = (values) => {
    setloading(true);
    const roles = teacher ? "teacher" : student ? "student" : "educational";
    const userInfo = {
      roles,
      username: values.username,
      name: values.name,
      lastname: values.lastname,
      password: values.password,
      email: values.user.email,
      birthdate: values["date-picker"]._d,
      specialisation,
      centerAdress: values.centerAdress,
      centerName: values.centerName,
    };
    getInputs(userInfo);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    setSpec(value);
  }
  return (
    <Form
      {...layout}
      name='basic'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            message: "Iltimos Ismingiz va Familyangizni kirinting",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Ism'
        name='name'
        rules={[
          {
            required: true,
            message: "Iltimos Ismingiz va Familyangizni kirinting",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Familiya'
        name='lastname'
        rules={[
          {
            required: true,
            message: "Iltimos Ismingiz va Familyangizni kirinting",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label='Email'
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='date-picker' label='DatePicker' {...config}>
        <DatePicker />
      </Form.Item>
      {teacher && (
        <Select
          defaultValue='Mutaxasisligingiz (fan) ni kiriting'
          onChange={handleChange}
        >
          <Option value='English'>Ingliz tili</Option>
          <Option value='Matematika'>Matematika</Option>
          <Option value='Fizika'>Fizika</Option>
        </Select>
      )}

      {center && (
        <div className=''>
          <Form.Item
            label='Markaz nomi'
            name='centerName'
            rules={[
              {
                required: true,
                message: "Markaz nomi ni kiriting",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Manzil(vil)'
            name='centerAdress'
            rules={[
              {
                required: true,
                message: "Manzil(vil) ni kiriting",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
      )}

      <Form.Item className='register-btn-wrapper' {...tailLayout}>
        <Button type='primary' htmlType='submit' loading={loading}>
          Ro'yxatdan o'tish
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntForm;

import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select, Switch } from "antd";
const { TextArea } = Input;

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

const AntForm = ({
  teacher,
  center,
  student,
  getInputs,
  defaults,
  aboutTeacher,
}) => {
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
      allowTest: values.allowTest,
      aboutTeacher: values.aboutTeacher,
    };
    console.log(userInfo);
    getInputs(userInfo, setloading);
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
        initialValue={defaults ? defaults.username : ""}
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
        initialValue={defaults ? defaults.firstname : ""}
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
        initialValue={defaults ? defaults.lastname : ""}
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
        initialValue={defaults ? defaults.email : ""}
        name={["user", "email"]}
        label='Email'
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={defaults ? defaults.birthdate : ""}
        name='date-picker'
        label='DatePicker'
        {...config}
      >
        <DatePicker />
      </Form.Item>

      {/* {adminAddRoles && ( */}
      {aboutTeacher && (
        <Form.Item name='aboutTeacher' label="O'qituvchi haqida">
          <Input.TextArea />
        </Form.Item>
      )}
      {/* )} */}

      {teacher && (
        <Select
          initialValue={defaults ? defaults.specialisation : ""}
          defaultValue='Mutaxasisligingiz (fan) ni kiriting'
          onChange={handleChange}
        >
          <Option value='English'>Ingliz tili</Option>
          <Option value='Matematika'>Matematika</Option>
          <Option value='Fizika'>Fizika</Option>
          <Option value='Ona tili va Adabiyot'>Ona tili va Adabiyot</Option>
          <Option value='Tarix'>Tarix</Option>
          <Option value='Biologiya'>Biologiya</Option>
          <Option value='Kimyo'>Kimyo</Option>
          <Option value='Geografiya'>Geografiya</Option>
          <Option value='Informatika'>Informatika</Option>
          <Option value='Nemis tili'>Nemis tili</Option>
          <Option value='Rus tili'>Rus tili</Option>
          <Option value='IT'>IT</Option>
          <Option value='korean'>Koreys tili</Option>
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

          {aboutTeacher && (
            <Form.Item label='Test topshirishga ruxsat' name='allowTest'>
              <Switch />
            </Form.Item>
          )}
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

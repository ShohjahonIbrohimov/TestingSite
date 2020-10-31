import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import { message } from "antd";

import axios from "axios";

const config = {
  rules: [{ type: "object" }],
};

const LoginForm = ({ setupdate, updatePassword }) => {
  const [loading, setloading] = useState(false);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const { riseUpAccess, userInfo } = useContext(AcessTokenContext);

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const success = () => {
    message.success("Ma'lumotlar muvaffaqiyatli yangilandi");
  };

  const error = () => {
    message.error("Xato yuz berdi, qurilmangiz internetga ulanganmidi?");
  };

  const onFinish = (values) => {
    console.log(values);
    setloading(true);

    axios
      .post(
        `https://itriceapp.apicrm.online/api/auth/${
          !updatePassword ? "user/update" : "change-password"
        }`,
        values,
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        success();
        setloading(false);
        setupdate(false);
        console.log(res.data);
      })
      .catch((err) => {
        error();
        setloading(false);
      });
  };

  return (
    <Form
      form={form}
      name='horizontal_login'
      layout='inline'
      onFinish={onFinish}
    >
      {!updatePassword && (
        <div>
          <Form.Item initialValue={userInfo.name} name='name'>
            <Input placeholder='Ism' />
          </Form.Item>
          <Form.Item initialValue={userInfo.surname} name='surname'>
            <Input placeholder='Familiya' />
          </Form.Item>
          <Form.Item initialValue={userInfo.email} name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item name='birthdate' {...config}>
            <DatePicker />
          </Form.Item>
        </div>
      )}
      {updatePassword && (
        <div>
          <Form.Item
            name='currentPassword'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Eski parol'
            />
          </Form.Item>
          <Form.Item
            name='newPassword'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Yangi parol'
            />
          </Form.Item>
        </div>
      )}
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button type='primary' htmlType='submit' loading={loading}>
            Yangilash
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

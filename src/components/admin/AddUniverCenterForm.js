import React, { useState } from "react";
import { Form, Input, Switch, Button } from "antd";
import axios from "axios";

const AddUniverCenterForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const getInputFields = (values) => {
   
  };

  return (
    <>
      <Form
        onFinish={getInputFields}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout='horizontal'
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="O'quv markaz yoki Universitet nomi" name='name'>
          <Input />
        </Form.Item>
        <Form.Item label='Viloyat' name='region'>
          <Input />
        </Form.Item>
        <Form.Item label='Test topshirishga ruxsat' name='allowTest'>
          <Switch />
        </Form.Item>
        <Form.Item label='Button'>
          <Button htmlType='submit'>Qo'shish</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUniverCenterForm;

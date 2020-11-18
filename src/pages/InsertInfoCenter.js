import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import MainImage from "../components/InsertInfoCenter/MainImage";
import Photos from "../components/InsertInfoCenter/Photos";
import { message, Form, Input, InputNumber, Button } from "antd";
import "antd/dist/antd.css";
import { AcessTokenContext } from "../contexts/accessTokenContext";

const { TextArea } = Input;

const Registration = () => {
  const [redirect, setredirect] = useState(false);
  const [loading, setloading] = useState(false);
  const { riseUpAccess } = useContext(AcessTokenContext);
  const [mainImage, setmainImage] = useState("");
  const [images, setPhotos] = useState([]);

  const onFinish = (values) => {
    console.log({
      top: 1,
      mainImage,
      images,
      ...values,
      centerName: "Ziyokor",
    });
    console.log(riseUpAccess.accessToken);
    axios
      .post(
        "https://itriceapp.apicrm.online/api/about/create",
        {
          top: 1,
          mainImage,
          images,
          ...values,
          centerName: "Ziyokor",
        },
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        error();
      });
  };

  const error = () => {
    message.error("Elektron pochta yoki parol noto'g'ri");
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='login-page'>
      <div className='regbg'></div>
      {renderRedirect()}
      <div className='container'>
        <h1 className='welcome-site'>Saytimizga xush kelibsiz </h1>
        <div className='registration'>
          <Form name='nest-messages' onFinish={onFinish}>
            <div className='photos'>
              <MainImage
                riseUpAccess={riseUpAccess}
                setmainImage={setmainImage}
              />
            </div>
            <div className='photos'>
              <Photos
                images={images}
                riseUpAccess={riseUpAccess}
                setPhotos={setPhotos}
              />
            </div>
            <Form.Item name={"aboutCenter"}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={"courses"}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={"examDesc"}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

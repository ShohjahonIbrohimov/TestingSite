import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const MainImage = ({ setmainImage, riseUpAccess }) => {
  const [state, setstate] = useState({ loading: false });

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setstate({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) =>
        setstate({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const postData = (file) => {
    const formData = new FormData();
    formData.append("photo", file.file);
    axios
      .post("https://itriceapp.apicrm.online/api/update/edu", formData, {
        headers: file.headers,
      })
      .then((res) => {
        const data = res.data;
        setstate({ imageUrl: data.url, loading: false });
        setmainImage(data.url);
      })
      .catch((error) => {
        // Display error
      });
  };

  const { loading, imageUrl } = state;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Upload
      name='avatar'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      customRequest={postData}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      headers={{
        "x-access-token": riseUpAccess.accessToken,
      }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt='avatar' style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default MainImage;

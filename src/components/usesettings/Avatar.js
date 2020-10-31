import React, { useState, useContext } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import axios from "axios";

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

const Avatar = () => {
  const [img, setimg] = useState({ loading: false });
  const [file, setfile] = useState(null);
  const { setAvatar, riseUpAccess, avatar } = useContext(AcessTokenContext);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setimg({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      //   setfile({ file: e.target.files[0] });
    }
  };

  const { loading, imageUrl } = img;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const postData = (file) => {
    const formData = new FormData();
    formData.append("photo", file.file);
    axios
      .post("https://itriceapp.apicrm.online/api/update/avatar", formData, {
        headers: file.headers,
      })
      .then((res) => {
        const data = res.data;

        setimg({ imageUrl: data.url, loading: false });
        setAvatar(data.url);
      })
      .catch((error) => {
        // Display error
      });
  };
  return (
    <Upload
      name='avatar'
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      customRequest={postData}
      beforeUpload={beforeUpload}
      headers={{
        "x-access-token": riseUpAccess.accessToken,
      }}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt='avatar' style={{ width: "100%" }} />
      ) : avatar ? (
        <img src={avatar} alt='avatar' style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default Avatar;

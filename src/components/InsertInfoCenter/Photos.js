import React, { useState } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Photos = ({ images, setPhotos, riseUpAccess }) => {
  const [state, setstate] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });

  const handleCancel = () => setstate({ ...state, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setstate({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const handleChange = ({ fileList }) => {
    setstate({ ...state, fileList });
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
        file.file.status = "done";
        let files = [...state.fileList, file.file];
        setstate({ ...state, fileList: files });
        setPhotos([...images, res.data.url]);
      })
      .catch((error) => {
        // Display error
      });
  };

  const { previewVisible, previewImage, fileList, previewTitle } = state;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Foto lavhalar</div>
    </div>
  );
  return (
    <>
      <Upload
        customRequest={postData}
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        headers={{
          "x-access-token": riseUpAccess.accessToken,
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt='example' style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default Photos;

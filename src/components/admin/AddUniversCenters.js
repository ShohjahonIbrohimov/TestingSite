import React, { useState } from "react";
import { Modal, Button } from "antd";
import AddUniverCenterForm from "./AddUniverCenterForm";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Tooltip, message } from "antd";
import AntForm from "../register/AntForm";
import axios from "axios";
import { findAllByTestId } from "@testing-library/react";

const text = <span>Universitet yoki O'quv markaz qo'shish</span>;

const AddUniversCenters = () => {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    setvisible(false);
  };

  const handleCancel = (e) => {
    setvisible(false);
  };

  const success = () => {
    message.success("Muvaffaqiyatli qo'shildi");
  };

  const error = () => {
    message.error("Xatolik yuz berdi");
  };

  const getInputs = (values, setloading) => {
    setloading(true);
    axios
      .post("https://itriceapp.apicrm.online/api/auth/signup", values)
      .then((res) => {
        console.log(res.data);
        setloading(false);
        setvisible(false);
        success();
      })
      .catch((err) => {
        error();
      });
  };

  return (
    <div>
      <Tooltip placement='bottom' title={text} onClick={showModal}>
        <PlusCircleOutlined
          style={{ fontSize: "1.5rem", color: "grey", cursor: "pointer" }}
        />
      </Tooltip>
      <Modal
        title="O'quv markaz yoki Universitet qo'shish"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[""]}
      >
        <AntForm
          teacher={false}
          student={false}
          center={true}
          getInputs={getInputs}
        />
      </Modal>
    </div>
  );
};

export default AddUniversCenters;

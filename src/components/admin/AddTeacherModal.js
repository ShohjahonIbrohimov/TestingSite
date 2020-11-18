import { Modal, message } from "antd";
import React, { useContext } from "react";
import AntForm from "../register/AntForm";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import axios from "axios";

const AddTeacherModal = ({
  visible,
  setvisible,
  teachers,
  setteachers,
  defaults,
}) => {
  const { riseUpAccess } = useContext(AcessTokenContext);
  const success = () => {
    message.success("Muvaffaqiyatli roýxatdan o'tkazildi");
  };

  const error = () => {
    message.error("Xatolik yuz berdi");
  };

  const addTeacher = (inputs, setloading) => {
    const teacherInfo = {
      username: inputs.username,
      name: inputs.name,
      surname: inputs.lastname,
      specialisation: inputs.specialisation,
      centerAdress: "Namangan",
      email: inputs.email,
      password: inputs.password,
      birthdate: inputs.birthdate,
    };

    axios
      .post(
        "https://itriceapp.apicrm.online/api/auth/signup/reg/teacher",
        teacherInfo,
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log(teachers);
        setteachers([...teachers, teacherInfo]);
        setloading(false);
        success();
      })
      .catch((err) => {
        error();
      });
  };

  const handleOk = (e) => {
    setvisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
  };

  return (
    <div className='add-teacher-modal'>
      <Modal
        title="O'qituvchi qo'shish"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AntForm
          aboutTeacher={true}
          teacher={true}
          getInputs={addTeacher}
          defaults={defaults}
        />
      </Modal>
    </div>
  );
};

export default AddTeacherModal;

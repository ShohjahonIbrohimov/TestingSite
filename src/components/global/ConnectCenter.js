import React, { useState, useContext } from "react";
import { Modal, Button, Select, Tooltip } from "antd";
import axios from "axios";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { TakeTestContext } from "../../contexts/TakeTestContext";

const { Option } = Select;

const ConnectCenter = ({ connectedCenter, setconnectedCenter }) => {
  const [visible, setvisible] = useState(false);
  const [centers, setcenters] = useState([]);
  const [subjects, setsubjects] = useState([]);
  const { riseUpAccess } = useContext(AcessTokenContext);
  const [selectedCenter, setselectedCenter] = useState("");
  const { setloading } = useContext(LoaderContext);
  const { allowTakeTest, setallowTakeTest } = useContext(TakeTestContext);
  const [connected, setconnected] = useState(false);

  const handleChangeCenter = (value) => {
    setselectedCenter(value);
  };

  const handleChangeSubject = (value) => {
    setsubjects(value);
  };

  const text = (
    <span>
      Siz bog'langan markaz: "{" "}
      {selectedCenter ? selectedCenter : connectedCenter} "
    </span>
  );

  const showModal = () => {
    setloading(true);
    axios
      .get("https://itriceapp.apicrm.online/api/edu/select", {
        headers: {
          "x-access-token": riseUpAccess.accessToken,
        },
      })
      .then((res) => {
        console.log(res);
        setloading(false);
        setcenters(res.data);
        setvisible(true);
      });
  };

  const handleOk = (e) => {
    const center = centers.filter((c) => c.centerName === selectedCenter);

    axios
      .post(
        "https://itriceapp.apicrm.online/api/edu/select/update",
        {
          tiedID: center[0]._id,
          educational: center[0].centerName,
          allowedSubjects: subjects,
        },
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setallowTakeTest(true);
        setconnected(true);
        setconnectedCenter();
      });
    setvisible(false);
  };

  const handleCancel = (e) => {
    setvisible(false);
  };

  return (
    <div>
      {connectedCenter === "" && (
        <i onClick={showModal} className='far fa-question-circle'></i>
      )}

      <Tooltip placement='bottom' title={text} color='green'>
        {connectedCenter !== "" && (
          <div>
            <i class='fas fa-university'></i>
          </div>
        )}
      </Tooltip>
      <Modal
        title="O'quv Markazga bog'lash"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          virtual={false}
          defaultValue="O'quv markani tanlang"
          onChange={handleChangeCenter}
        >
          {centers.map((c) => (
            <Option key={c._id} value={`${c.centerName}`}>
              {c.centerName}
            </Option>
          ))}
        </Select>
        <Select
          mode='tags'
          allowClear
          style={{ width: "100%" }}
          placeholder='Please select'
          onChange={handleChangeSubject}
        >
          <Option key='Matematika'>Matematika</Option>
          <Option key='Ingliz tili'>Ingliz tili</Option>
          <Option key='Adabiyot'>Adabiyot</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default ConnectCenter;

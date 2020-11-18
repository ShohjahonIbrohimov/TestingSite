import React, { useState, useEffect, useContext } from "react";
import { Table, Select, Button, message } from "antd";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import axios from "axios";

const { Option } = Select;
const columns = [
  {
    title: "Ism",
    dataIndex: "firstname",
  },
  {
    title: "Familiya",
    dataIndex: "lastname",
  },
  {
    title: "Tug'ilgan kun",
    dataIndex: "birthdate",
  },
  {
    title: "Elektron pochta",
    dataIndex: "email",
  },
  {
    title: "Fanlar",
    dataIndex: "subjects",
  },
];
let selectedSubjects = [];

const TableOfStudents = ({ students }) => {
  const [selectedRowKeys, setselectedRowKeys] = useState([]);
  const [selectedStudents, setselectedStudents] = useState([]);
  const [data, setdata] = useState([]);
  const { riseUpAccess } = useContext(AcessTokenContext);
  const [loading, setloading] = useState(false);

  console.log(students);

  const success = () => {
    message.success("Muvaffaqiyatli saqlandi");
  };

  const error = () => {
    message.error("Saqlashda xatolik yuz berdi");
  };

  console.log(selectedRowKeys);

  const onSelectChange = (selectedRowKeys) => {
    setselectedRowKeys(selectedRowKeys);
  };

  const handleSelect = (value, subject) => {
    selectedSubjects.push(subject);
  };

  const onSelectOneRow = (record, selected, selectedRows, nativeEvent) => {
    const subjects = selectedSubjects.filter((s) => record.key === s.className);
    let subNames = [];
    subjects.map((s) => {
      subNames.push(s.value);
    });

    setselectedStudents([
      ...selectedStudents,
      { userUID: record.key, allow: selected, subjects: subNames },
    ]);
  };

  const handleDeselect = (value, subject) => {
    selectedSubjects = selectedSubjects.filter((s) => s.l);
  };

  const saveData = () => {
    console.log(selectedRowKeys);
    setloading(true);
    axios
      .post(
        "https://itriceapp.apicrm.online/api/auth/student/allow",
        {
          userUID: selectedRowKeys,
          allow: true,
        },
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setloading(false);
        success();
      })
      .catch((err) => {
        error();
      });
  };

  useEffect(() => {
    let allowedSts = [];
    let copyOfData = [];
    students.map((student) => {
      copyOfData.push({
        key: student._id,
        firstname: student.name,
        lastname: student.surname,
        birthdate: student.birthdate,
        email: student.email,
        subjects: (
          <Select
            key={student._id}
            mode='multiple'
            allowClear
            onSelect={handleSelect}
            onDeselect={handleDeselect}
            style={{ width: "100%" }}
            placeholder='Please select'
          >
            <Option className={student._id} key='Matematika'>
              Matematika
            </Option>
            <Option className={student._id} key='Ingliz tili'>
              Ingliz tili
            </Option>
            <Option className={student._id} key='Adabiyot'>
              Adabiyot
            </Option>
          </Select>
        ),
      });
      if (student.allowID) {
        allowedSts.push(student._id);
      }
    });
    setdata(copyOfData);
    setselectedRowKeys([...selectedRowKeys, ...allowedSts]);
  }, [students]);

  const rowSelection = {
    selectedRowKeys,
    onSelect: onSelectOneRow,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setselectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setselectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <div onClick={saveData}>
        <Button type='primary' htmlType='submit' loading={loading}>
          Saqlash
        </Button>
      </div>
    </div>
  );
};

export default TableOfStudents;

import React, { useState, useEffect, useContext } from "react";
import { Tabs, Button } from "antd";
import TableOfStudents from "../admin/TableOfStudents";
import TableOfTeachers from "../admin/TableOfTeachers";
import AddTeacherModal from "../admin/AddTeacherModal";
import { TeachersContext } from "../../contexts/TeachersContext";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import TableOfTests from "../admin/TableOfTests";
import axios from "axios";

const { TabPane } = Tabs;

const AdminTabs = ({ students }) => {
  const [visible, setvisible] = useState(false);
  const { riseUpAccess } = useContext(AcessTokenContext);
  const { teachers, setteachers } = useContext(TeachersContext);
  const [results, setresults] = useState([]);
  const [defaults, setdefaults] = useState({});

  const showModal = () => {
    setvisible(true);
  };

  const getDefaults = (defaults) => {
    setdefaults(defaults);
  };

  useEffect(() => {
    // Get results
    axios
      .get("https://itriceapp.apicrm.online/api/riceapp/result", {
        headers: {
          "x-access-token": riseUpAccess.accessToken,
        },
      })
      .then((res) => {
        setresults(res.data);
      });
  }, []);

  return (
    <Tabs defaultActiveKey='1' centered>
      <TabPane tab="O'quvchilar" key='1'>
        <TableOfStudents students={students} />
      </TabPane>
      <TabPane tab="O'qituvchilar" key='2'>
        <Button type='primary' onClick={showModal}>
          O'qituvchi qo'shish
        </Button>
        <AddTeacherModal
          defaults={defaults}
          teachers={teachers}
          setteachers={setteachers}
          visible={visible}
          setvisible={setvisible}
        />
        <TableOfTeachers
          teachers={teachers}
          getDefaults={getDefaults}
          setvisible={setvisible}
        />
      </TabPane>
      <TabPane tab='Testlar' key='3'>
        <TableOfTests results={results} />
      </TabPane>
    </Tabs>
  );
};

export default AdminTabs;

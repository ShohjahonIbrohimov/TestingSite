import React from "react";
import { Tabs } from "antd";
import TableOfStudents from "../admin/TableOfStudents";
import TableOfTeachers from "../admin/TableOfTeachers";
import TableOfTests from "../admin/TableOfTests";

const { TabPane } = Tabs;

const AdminTabs = () => (
  <Tabs defaultActiveKey='1' centered>
    <TabPane tab="O'quvchilar" key='1'>
      <TableOfStudents />
    </TabPane>
    <TabPane tab="O'qituvchilar" key='2'>
      <TableOfTeachers />
    </TabPane>
    <TabPane tab='Testlar' key='3'>
      <TableOfTests />
    </TabPane>
  </Tabs>
);

export default AdminTabs;

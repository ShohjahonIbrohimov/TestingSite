import React, { useState, useEffect } from "react";
import { Table } from "antd";

const TableOfTests = ({ results }) => {
  const [data, setdata] = useState([]);
  const [columns, setcolumns] = useState([
    {
      title: "O'quvchi ismi",
      dataIndex: "nameOfStudent",
      width: 200,
    },
    {
      title: "To'gri javoblar soni",
      dataIndex: "corrects",
      width: 200,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Noto'gri javoblar soni",
      dataIndex: "incorrects",
      width: 250,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Jami savollar soni",
      dataIndex: "total",
      width: 200,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Fan nomi",
      dataIndex: "subject",
      width: 200,
    },
  ]);

  useEffect(() => {
    let resultsArr = [];
    results.forEach((r) => {
      let row = {
        key: r.id,
        nameOfStudent: r.name,
        corrects: r.corrects,
        incorrects: r.inCorrects,
        total: r.totalQuestions,
        subject: r.subject,
      };
      resultsArr.push(row);
    });
    setdata(resultsArr);
  }, [results]);

  return <Table bordered={true} columns={columns} dataSource={data} />;
};

export default TableOfTests;

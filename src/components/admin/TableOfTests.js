import React, { Component } from "react";
import { Table } from "antd";
import { Resizable } from "react-resizable";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className='react-resizable-handle'
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class TableOfTests extends React.Component {
  state = {
    columns: [
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
    ],
  };

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    {
      key: 1,
      nameOfStudent: "Shokir Qayumov",
      corrects: 10,
      incorrects: 20,
      total: 30,
      subject: "English",
    },
    {
      key: 2,
      nameOfStudent: "Shokir Qayumov",
      corrects: 10,
      incorrects: 20,
      total: 30,
      subject: "English",
    },
    {
      key: 3,
      nameOfStudent: "Shokir Qayumov",
      corrects: 10,
      incorrects: 20,
      total: 30,
      subject: "English",
    },
    {
      key: 4,
      nameOfStudent: "Shokir Qayumov",
      corrects: 10,
      incorrects: 20,
      total: 30,
      subject: "English",
    },
  ];

  handleResize = (index) => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column) => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <Table
        bordered={true}
        components={this.components}
        columns={columns}
        dataSource={this.data}
      />
    );
  }
}

export default TableOfTests;

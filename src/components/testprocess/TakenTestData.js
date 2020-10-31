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

class TakenTestData extends React.Component {
  state = {
    columns: [
      {
        title: "Fan nomi",
        dataIndex: "type",
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
        title: "Action",
        key: "action",
        render: () => <a>O'chirish</a>,
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
      key: 0,
      date: "2018-02-11",
      corrects: this.props.corrects,
      incorrects: this.props.incorrects,
      total: this.props.total,
      type: "Ingliz tili",
      note: "transfer",
    },
    {
      key: 0,
      date: "2018-02-11",
      corrects: this.props.corrects,
      incorrects: this.props.incorrects,
      total: this.props.total,
      type: "Ingliz tili",
      note: "transfer",
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

export default TakenTestData;

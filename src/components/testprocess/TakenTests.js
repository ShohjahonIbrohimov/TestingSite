import React from "react";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import TakenTestData from "./TakenTestData";

const { Panel } = Collapse;

const TakenTests = () => {
  return (
    <div className='taken-tests'>
      <h1>Oldingi ishlangan testlar</h1>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className='site-collapse-custom-collapse'
      >
        <Panel
          header='Yanvar 5 2019'
          key='1'
          className='site-collapse-custom-panel'
        >
          <TakenTestData />
        </Panel>
      </Collapse>
      ,
    </div>
  );
};
export default TakenTests;

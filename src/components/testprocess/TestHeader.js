import React, { useContext, useEffect, useState } from "react";
import { StResultsContext } from "../../contexts/StResultsContext";
import TopboardCrown from "../home/TopboardCrown";
import StudentInfo from "../home/StudentInfo";
import Timer from "./Countdown";

const TestHeader = () => {
  // const { topFiveSts, getStResults } = useContext(StResultsContext);

  // let stInfo = topFiveSts[0];

  // const { image, name, surname, top, city } = stInfo;

  return (
    <div className='test-header'>
      <div className='about-student'>
        <div className='student-image'>
          <img src={require("../../assets/home/prezident-img.jpg")} alt='' />
        </div>
        <StudentInfo stName={"Sardor Toirov"} stAdress={"Toshkent"} />
      </div>
      <div className='student-position'>
        <TopboardCrown place={1} />
        <h3>TOPBOARD A'ZOSI, ENG FAOL</h3>
      </div>
      {/* <Timer /> */}
    </div>
  );
};

export default TestHeader;

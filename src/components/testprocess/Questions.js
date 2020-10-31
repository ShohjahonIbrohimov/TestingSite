import React from "react";
// import SubsByMajor from "./SubsByMajor";
import TestsByMajor from "./TestsByMajor";
import TestButtons from "./TestButtons";

const Questions = () => {
  return (
    <div className='questions'>
      <div className='slide-indicator'>
        <img
          src={require("../../assets/testprocess/slideIndicator.png")}
          alt=''
        />
      </div>
      {/* <SubsByMajor /> */}
      <TestsByMajor />
      {/* <TestButtons /> */}
    </div>
  );
};

export default Questions;

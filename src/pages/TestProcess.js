import React, { useContext } from "react";
import QuestionArea from "../components/testprocess/QuestionArea";
import TestResult from "../components/testprocess/TestResult";

import { TestResultContext } from "../contexts/TestResultContext";

const TestProcess = () => {
  const { calculated } = useContext(TestResultContext);
  return (
    <div className='container'>
      <div className='test-process'>
        <QuestionArea />
        {calculated && (
          <div>
            <TestResult />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestProcess;

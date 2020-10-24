import React, { useContext } from "react";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { Link } from "react-router-dom";
import TestsOfTeacher from "../components/testCollections/TestsOfTeacher";

const TestCollections = () => {
  const { tests } = useContext(QuestionsContext);

  console.log(tests);
  return (
    <div className='container'>
      <div className='test-collections'>
        {tests.length !== 0 ? "There are tests" : "No tests left"}
        {tests.map((test) => (
          <TestsOfTeacher
            creator={test.creator}
            subject={test.check}
            createdAt={test.createdAt}
            qnum={test.english.length}
          />
        ))}
      </div>
    </div>
  );
};

export default TestCollections;

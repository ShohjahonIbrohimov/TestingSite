import React, { useContext } from "react";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { Link } from "react-router-dom";
import TestsOfTeacher from "../components/testCollections/TestsOfTeacher";
import NoResult from "../components/global/NoResult";

const TestCollections = () => {
  const { tests } = useContext(QuestionsContext);

  console.log(tests);
  return (
    <div className='container'>
      <div className='test-collections'>
        {tests.map((test) => (
          <TestsOfTeacher
            creator={test.creator}
            subject={test.check}
            createdAt={test.createdAt}
            qnum={test[test.check].length}
            createID={test.creatID}
          />
        ))}
        {tests.length === 0 && <NoResult />}
      </div>
    </div>
  );
};

export default TestCollections;

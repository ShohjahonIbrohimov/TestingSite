import React, { useContext } from "react";
import CircleChoice from "./CircleChoice";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const TestChoice = ({ num }) => {
  const { mathQuestions } = useContext(QuestionsContext);

  let selectedValue = mathQuestions[num - 1].selected;

  return (
    <div className='test-choice'>
      <span className='num'>{num}</span>
      {selectedValue === "A" ? (
        <CircleChoice letter='A' selected={selectedValue} />
      ) : (
        <CircleChoice letter='A' selected={""} />
      )}
      {selectedValue === "B" ? (
        <CircleChoice letter='B' selected={selectedValue} />
      ) : (
        <CircleChoice letter='B' selected={""} />
      )}
      {selectedValue === "C" ? (
        <CircleChoice letter='C' selected={selectedValue} />
      ) : (
        <CircleChoice letter='C' selected={""} />
      )}
      {selectedValue === "D" ? (
        <CircleChoice letter='D' selected={selectedValue} />
      ) : (
        <CircleChoice letter='D' selected={""} />
      )}
    </div>
  );
};

export default TestChoice;

import React, { createContext, useState } from "react";

export const QuestionsContext = createContext();

const QuestionsContextProvider = (props) => {
  // States
  const [mathQuestions, setMathQuestions] = useState([]);
  const [tests, settests] = useState(null);
  const [creatID, setcreatID] = useState("");

  // Functions
  const setSelectedChoice = (letter, qnum) => {
    if (mathQuestions[qnum - 1].selected === letter) {
      const copyMathQuestions = mathQuestions.slice();
      const selectedQ = mathQuestions[qnum - 1];
      selectedQ.selected = "";
      copyMathQuestions[qnum - 1] = selectedQ;

      setMathQuestions(copyMathQuestions);
    } else {
      const copyMathQuestions = mathQuestions.slice();
      const selectedQ = mathQuestions[qnum - 1];
      selectedQ.selected = letter;
      copyMathQuestions[qnum - 1] = selectedQ;

      setMathQuestions(copyMathQuestions);
    }
  };

  const sortByCreateID = (id) => {
    const test = tests.filter((test) => test.creatID === id);
    setMathQuestions(test[0][test[0].check]);
    setcreatID(id);
  };

  return (
    <QuestionsContext.Provider
      value={{
        mathQuestions,
        setSelectedChoice,
        tests,
        settests,
        sortByCreateID,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuestionsContext = createContext();

const QuestionsContextProvider = (props) => {
  const [mathQuestions, setMathQuestions] = useState([
    {
      number: 1,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 2,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 3,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "C",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 4,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 5,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 6,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 7,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 8,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 9,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 10,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 11,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 12,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 13,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 14,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "C",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 15,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 16,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 17,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 18,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 19,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 20,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 21,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 22,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 23,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 24,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 25,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "C",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 26,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 27,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "B",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 28,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 29,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "D",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
    {
      number: 30,
      blok: "MATEMATIKA",
      question: "img",
      answers: {
        A: "ans1",
        B: "ans2",
        C: "ans3",
        D: "ans4",
      },
      correctAns: "A",
      field: "Informtika va Axborot Texnologiyalari",
      selected: "",
    },
  ]);

  const [tests, settests] = useState(null);
  const [test, settest] = useState({});
  const [url, seturl] = useState(
    "https://itriceapp.apicrm.online/api/start/english"
  );
  const [selectedSubject, setselectedSubject] = useState("english");

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

  const changeUrl = () => {
    seturl(`https://itriceapp.apicrm.online/api/start/${selectedSubject}`);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(url);
      settests(res.data.test);
    };

    fetchdata();
  }, [url]);

  return (
    <QuestionsContext.Provider
      value={{
        mathQuestions,
        setSelectedChoice,
        tests,
        settests,
        changeUrl,
        setselectedSubject,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;

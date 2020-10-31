import React, { useContext } from "react";
import Button from "../global/Button";
import { QuestionsContext } from "../../contexts/QuestionsContext";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { TestResultContext } from "../../contexts/TestResultContext";

import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

const TestButtons = ({ next }) => {
  const { mathQuestions } = useContext(QuestionsContext);
  const { studentID, riseUpAccess } = useContext(AcessTokenContext);
  const { setloading } = useContext(LoaderContext);
  const { settestResults, setcalculated } = useContext(TestResultContext);

  function showConfirm() {
    confirm({
      title: "Testni yakunlashga ishonchingiz komlimi ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Ha",
      cancelText: "Testga qaytish",
      onOk() {
        setloading(true);
        calculateResults(studentID, riseUpAccess);
      },
      onCancel() {
        console.log("Testga qaytish");
      },
    });
  }

  const calculateResults = (studentID, riseUpAccess) => {
    let correctsArray = mathQuestions.filter(
      (q) => q.correctAns === q.selected
    );
    const totalQuestions = mathQuestions.length;
    const corrects = correctsArray.length;
    const coefOfCorrects = parseFloat(
      ((corrects / totalQuestions) * 100).toFixed(2)
    );
    const coefOfIncorrects = 100 - coefOfCorrects;
    const inCorrects = totalQuestions - corrects;
    const top = Math.round(coefOfCorrects / 10);
    const subject = "english";

    const finalResults = {
      top,
      subject,
      studentID,
      coefOfCorrects,
      coefOfIncorrects,
      totalQuestions,
      corrects,
      inCorrects,
      correctAnswers: 15,
    };

    settestResults({
      subject,
      corrects,
      inCorrects,
      totalQuestions,
    });

    setcalculated(true);

    console.log(finalResults);
    axios
      .post(
        "https://itriceapp.apicrm.online/api/riceapp/result",
        finalResults,
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        setloading(false);
        console.log(res);
      });
  };

  const endCurrentTest = () => {
    showConfirm();
  };

  const goToNextSlide = () => {
    next();
  };

  return (
    <div className='test-buttons'>
      <div onClick={endCurrentTest}>
        <Button
          className='middleBtn'
          text='Testni yakunlash'
          bgClass='greenBtn'
          py={1.5}
          px={0.5}
        />
      </div>
      <div onClick={goToNextSlide}>
        <Button text='Keyingi blok' bgClass='blueBtn' py={1.5} px={0.5} />
      </div>
    </div>
  );
};

export default TestButtons;

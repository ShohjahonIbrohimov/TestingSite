import React, { useState, useContext } from "react";
import { Button, message } from "antd";
import TextAreaWrap from "../components/createTest/TextArea";

import { Select } from "antd";
import QuestionNumber from "../components/testprocess/QuestionNumber";
import axios from "axios";
import { AcessTokenContext } from "../contexts/accessTokenContext";

const { Option } = Select;

const CreateTest = () => {
  const [loading, setloading] = useState(false);
  const { riseUpAccess, specialisation } = useContext(AcessTokenContext);
  const [numberOfQuestions, setnumberOfQuestions] = useState(1);
  const placeholders = ["A", "B", "C", "D"];
  const [question, setquestion] = useState("");
  const [answerA, setanswerA] = useState("");
  const [answerB, setanswerB] = useState("");
  const [answerC, setanswerC] = useState("");
  const [answerD, setanswerD] = useState("");
  const [correctAns, setcorrectAns] = useState("");

  const error = () => {
    message.error("Iltimos barcha qismlarni to'ldiring");
  };

  const success = () => {
    message.success("Savol muvaffaqiyatli tarzda qo'shildi");
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setcorrectAns(value);
  };

  const getQandAs = (placeholder, value) => {
    placeholder === "Savol"
      ? setquestion(value)
      : placeholder === "A"
      ? setanswerA(value)
      : placeholder === "B"
      ? setanswerB(value)
      : placeholder === "C"
      ? setanswerC(value)
      : setanswerD(value);

    console.log(question, answerA, answerB, answerC);
  };

  const createQuestion = () => {
    if (
      question === "" ||
      answerA === "" ||
      answerB === "" ||
      answerC === "" ||
      answerD === ""
    ) {
      error();
      return;
    }

    setloading(true);
    axios
      .post(
        "https://itriceapp.apicrm.online/api/start/create",
        {
          Direction:
            specialisation === "Matematika"
              ? "math"
              : specialisation === "Igliz tili"
              ? "english"
              : "physics",
          number: numberOfQuestions,
          question: question,
          answers: {
            A: answerA,
            B: answerB,
            C: answerC,
            D: answerD,
          },
          correctAns,
          selected: "",
        },
        {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        success();
        setloading(false);
        setnumberOfQuestions(numberOfQuestions + 1);
      });
  };

  return (
    <div className='container'>
      <div className='create-test'>
        <p>{numberOfQuestions} - SAVOL</p>

        <TextAreaWrap
          getQandAs={getQandAs}
          placeholder='Savol'
          Isquestion={true}
        />
        {placeholders.map((p) => (
          <TextAreaWrap getQandAs={getQandAs} placeholder={p} />
        ))}
        <Select
          defaultValue="To'gri javobni tanlang"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <Option value='A'>A</Option>
          <Option value='B'>B</Option>
          <Option value='C'>C</Option>
          <Option value='D'>D</Option>
        </Select>
        <div onClick={createQuestion}>
          <Button type='primary' loading={loading}>
            Yaratish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;

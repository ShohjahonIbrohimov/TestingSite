import React, { useState, useContext } from "react";
import { Button, message } from "antd";
import TextAreaWrap from "../components/createTest/TextArea";

import { Select } from "antd";
import QuestionNumber from "../components/testprocess/QuestionNumber";
import axios from "axios";
import { AcessTokenContext } from "../contexts/accessTokenContext";

const { Option } = Select;

const CreateTest = () => {
  const [createTestSubject, setcreateTestSubject] = useState(null);
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
    message.success(
      `${createTestSubject} dan savol muvaffaqiyatli tarzda qo'shildi`
    );
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setcorrectAns(value);
  };

  const handleCreateTest = (e) => {
    setcreateTestSubject(e);
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
            createTestSubject === "Matematika"
              ? "math"
              : createTestSubject === "Igliz tili"
              ? "english"
              : createTestSubject === "Fizika"
              ? "physics"
              : createTestSubject === "Ona tili va Adabiyot"
              ? "tongue"
              : createTestSubject === "Tarix"
              ? "history"
              : createTestSubject === "Biologiya"
              ? "biology"
              : createTestSubject === "Kimyo"
              ? "chemistry"
              : createTestSubject === "Geografiya"
              ? "geography"
              : createTestSubject === "Informatika"
              ? "informatics"
              : createTestSubject === "Nemis tili"
              ? "german"
              : createTestSubject === "Rus tili"
              ? "russian"
              : createTestSubject === "IT"
              ? "it"
              : "korean",
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
        console.log(res);
        setloading(false);
        setnumberOfQuestions(numberOfQuestions + 1);
      });
  };

  return (
    <div className='container'>
      <div className='create-test'>
        <Select
          defaultValue='Fan tanlang'
          style={{ width: "100%" }}
          onSelect={handleCreateTest}
        >
          <Option value='English'>Ingliz tili</Option>
          <Option value='Matematika'>Matematika</Option>
          <Option value='Fizika'>Fizika</Option>
          <Option value='Ona tili va Adabiyot'>Ona tili va Adabiyot</Option>
          <Option value='Tarix'>Tarix</Option>
          <Option value='Biologiya'>Biologiya</Option>
          <Option value='Kimyo'>Kimyo</Option>
          <Option value='Geografiya'>Geografiya</Option>
          <Option value='Informatika'>Informatika</Option>
          <Option value='Nemis tili'>Nemis tili</Option>
          <Option value='Rus tili'>Rus tili</Option>
          <Option value='IT'>IT</Option>
          <Option value='korean'>Koreys tili</Option>
        </Select>
      </div>
      {createTestSubject !== null && (
        <div className='create-test'>
          {/* <p>{numberOfQuestions} - SAVOL</p> */}

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
            <Button
              type='primary'
              style={{ padding: "0.5rem 2.5rem" }}
              loading={loading}
            >
              Yaratish
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTest;

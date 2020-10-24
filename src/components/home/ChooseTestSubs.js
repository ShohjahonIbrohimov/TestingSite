import React, { useState, useContext, useEffect } from "react";
import PageTitle from "../global/PageTitle";
import ChooseSubBtn from "./subjectBtns";
import Button from "../global/Button";
import { QuestionsContext } from "../../contexts/QuestionsContext";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ChooseTestSubs = () => {
  const [redirect, setredirect] = useState(false);
  const { settests, tests, changeUrl, setselectedSubject } = useContext(
    QuestionsContext
  );
  const [testTime, settestTime] = useState(0);

  const [english, setenglish] = useState(false);
  const [math, setmath] = useState(false);
  const [physics, setphysics] = useState(false);

  const subjects = [
    { uzb: "Ingliz tili", eng: "english", selected: english },
    { uzb: "Matematika", eng: "math", selected: math },
    { uzb: "Fizika", eng: "physics", selected: physics },
  ];

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/test-collections' />;
    }
  };

  const setSelected = (subject) => {
    switch (subject) {
      case "english":
        setenglish(true);
        setmath(false);
        setphysics(false);
        setselectedSubject("english");

        break;
      case "math":
        setenglish(false);
        setmath(true);
        setphysics(false);
        setselectedSubject("math");
        break;
      default:
        setenglish(false);
        setmath(false);
        setphysics(true);
        setselectedSubject("physics");

        break;
    }
  };

  const handleClick = () => {
    changeUrl();
    setredirect(true);
  };
  return (
    <div className='container'>
      {renderRedirect()}
      <div className='choose-test-subs'>
        <PageTitle title='Siz qaysi fanlardan test ishlamoqchisiz ? (max 3 )' />
        <div className='tests-by-subject-buttons'>
          {subjects.map((s) => (
            <ChooseSubBtn
              key={s.eng}
              setSelected={setSelected}
              testTime={testTime}
              text={s.uzb}
              name={s.eng}
              bgClass='darkBlueBtn'
              selected={s.selected}
              selectBtn={true}
            />
          ))}
        </div>
        <p>Berliadigan vaqt: 60min</p>

        <div onClick={handleClick}>
          <Button text='Keyingi' bgClass='blueBtn' py={2} px={0.5} />
        </div>
      </div>
    </div>
  );
};

export default ChooseTestSubs;

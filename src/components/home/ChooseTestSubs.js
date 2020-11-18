import React, { useState, useContext, useEffect } from "react";
import PageTitle from "../global/PageTitle";
import ChooseSubBtn from "./subjectBtns";
import Button from "../global/Button";
import { QuestionsContext } from "../../contexts/QuestionsContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { findAllByTestId } from "@testing-library/react";

const ChooseTestSubs = () => {
  const { setloading } = useContext(LoaderContext);
  const [redirect, setredirect] = useState(false);
  const [selectedSubject, setselectedSubject] = useState("english");
  const [url, seturl] = useState(
    "https://itriceapp.apicrm.online/api/start/undefined"
  );
  const { settests } = useContext(QuestionsContext);
  const { riseUpAccess } = useContext(AcessTokenContext);
  const [english, setenglish] = useState(false);
  const [math, setmath] = useState(false);
  const [physics, setphysics] = useState(false);
  const [tongue, settong] = useState(false);
  const [biology, setbio] = useState(false);
  const [chemistry, setchem] = useState(false);
  const [geografy, setgeo] = useState(false);
  const [history, sethistory] = useState(false);
  const [informatics, setinfor] = useState(false);
  const [german, setger] = useState(false);
  const [russian, setrus] = useState(false);
  const [it, setit] = useState(false);

  const subjects = [
    { uzb: "Ingliz tili", eng: "english", selected: english },
    { uzb: "Matematika", eng: "math", selected: math },
    { uzb: "Fizika", eng: "physics", selected: physics },
    { uzb: "Tarix", eng: "history", selected: history },
    { uzb: "Ona tili adabiyot", eng: "tongue", selected: tongue },
    { uzb: "Biologiya", eng: "biology", selected: biology },
    { uzb: "Kimyo", eng: "chemistry", selected: chemistry },
    { uzb: "Geografiya", eng: "geografy", selected: geografy },
    {
      uzb: "Informatika",
      eng: "informatics",
      selected: informatics,
    },
    { uzb: "Nemis tili", eng: "german", selected: german },
    {
      uzb: "Rus tili",
      eng: "russian",
      selected: russian,
    },
    { uzb: "IT", eng: "it", selected: it },
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
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("english");
        break;
      case "math":
        setmath(true);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("math");
        break;
      case "tongue":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(true);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("tongue");
        break;
      case "biology":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(true);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("biology");
        break;
      case "history":
        sethistory(true);
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("history");
        break;
      case "chemistry":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(true);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("chemistry");
        break;
      case "geografy":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(true);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("geografy");
        break;
      case "informatics":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(true);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("informatics");
        break;
      case "german":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(true);
        setrus(false);
        setit(false);
        setselectedSubject("german");
        break;
      case "russian":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(true);
        setit(false);
        setselectedSubject("russian");
        break;
      case "it":
        setmath(false);
        setenglish(false);
        setphysics(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(true);
        setselectedSubject("it");
        break;
      default:
        setphysics(true);
        setenglish(false);
        setmath(false);
        settong(false);
        setbio(false);
        setchem(false);
        setgeo(false);
        setinfor(false);
        setger(false);
        setrus(false);
        setit(false);
        setselectedSubject("physics");
        break;
    }
  };

  const changeUrl = () => {
    seturl(`https://itriceapp.apicrm.online/api/start/${selectedSubject}`);
  };

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(url, {
        headers: {
          "x-access-token": riseUpAccess.accessToken,
        },
      });
      try {
        console.log(res);
        settests(res.data.test);
        setloading(false);
      } catch {
        console.log(res);
      }
    };
    fetchdata();
  }, [url]);

  const handleClick = () => {
    setloading(true);
    changeUrl();
    setredirect(true);
  };
  return (
    <div className='container'>
      {renderRedirect()}
      <div className='choose-test-subs'>
        <PageTitle title='Siz qaysi fanlardan test ishlamoqchisiz ?' />
        <div className='tests-by-subject-buttons'>
          {subjects.map((s) => (
            <ChooseSubBtn
              key={s.eng}
              setSelected={setSelected}
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

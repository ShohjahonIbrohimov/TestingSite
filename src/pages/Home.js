import React, { useContext, useEffect } from "react";
// dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Showcase from "../components/global/Showcase";
import TopBoard from "../components/home/Topboard";
import ToptenStudents from "../components/home/ToptenStudents";
import PrezidentWords from "../components/home/PrezidentWords";
import Registeration from "../components/home/Registeration";
import Video from "../components/home/Video";
import CarouselUnivers from "../components/universities/CarouselUnivers";
import ChooseTestSubs from "../components/home/ChooseTestSubs";
// contexts
import { AcessTokenContext } from "../contexts/accessTokenContext";

const Home = () => {
  const { authMe } = useContext(AcessTokenContext);

  useEffect(() => {
    authMe();
  }, []);

  let showcaseText =
      "React will automatically append a “px” suffix to certain numeric inline style properties. If you want to use units other than ",
    btnText1 = "Test ishlash",
    btnText2 = "Ro'yxatdan o'tish",
    btnText3 = "Test yaratish",
    btnText4 = "O'quv markaz haqida ma'lumot qo'shish";

  return (
    <div className='home-page'>
      <Showcase
        bgName={"home"}
        text={showcaseText}
        btnText1={btnText1}
        btnText2={btnText2}
        btnText3={btnText3}
        btnText4={btnText4}
      />
      <CarouselUnivers />
      <TopBoard />
      <Video />
      <ToptenStudents />
      <div className='prezwords-reg'>
        <PrezidentWords />
        <Registeration />
      </div>
    </div>
  );
};

export default Home;

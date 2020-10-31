import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import showcaseSubjects from "../../assets/global/showcasBg-subjects.png";
import showcaseHome from "../../assets/global/showcasBg-home.png";
import showcaseUniversities from "../../assets/global/showcasBg-universities.png";
import showcaseTeachers from "../../assets/global/showcasBg-teachers.png";
import teacherTextBg from "../../assets/teachers/teacherTextBg.png";
import contactBg from "../../assets/global/showcasBg-contact.png";
import { AcessTokenContext } from "../../contexts/accessTokenContext";

const Showcase = ({
  bgName,
  title,
  text,
  btnText1,
  btnText2,
  btnText3,
  btnText4,
}) => {
  const { registered, userRole } = useContext(AcessTokenContext);

  const bgStyles = {
    backgroundImage: `url(${
      bgName === "home"
        ? showcaseHome
        : bgName === "subjects"
        ? showcaseSubjects
        : bgName === "universities"
        ? showcaseUniversities
        : bgName === "teachers"
        ? showcaseTeachers
        : contactBg
    })`,
  };

  const titleBg = {
    backgroundImage: `url${bgName === "teachers" ? teacherTextBg : ""}`,
  };
  return (
    <div className='container'>
      <div className='showcase notHome' style={bgStyles}>
        <div className='showcase-content'>
          <div className='showcase-title-cont'>
            {bgName === "teachers" || bgName === "contact" ? (
              <img
                src={require("../../assets/teachers/teacherTextBg.png")}
                alt=''
              />
            ) : (
              ""
            )}
            <h1 className='showcase-title'>{title}</h1>
          </div>
          <p>{text}</p>
          <div className='showcase-btns'>
            {registered && userRole === "student" && (
              <Link to='/choose'>
                {btnText1 && <Button text={btnText1} bgClass={"blueBtn"} />}
              </Link>
            )}
            {registered && userRole === "teacher" && (
              <Link to='/create-test'>
                {btnText3 && <Button text={btnText3} bgClass={"blueBtn"} />}
              </Link>
            )}
            {registered && userRole === "educational" && (
              <Link to='/create-test'>
                {btnText4 && <Button text={btnText4} bgClass={"greenBtn"} />}
              </Link>
            )}
            {!registered && (
              <Link to='/registration'>
                {btnText2 && <Button text={btnText2} bgClass={"greenBtn"} />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

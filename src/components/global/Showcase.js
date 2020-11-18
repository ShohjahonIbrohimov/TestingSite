import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

import Button from "./Button";
import showcaseSubjects from "../../assets/global/showcasBg-subjects.png";
import showcaseHome from "../../assets/global/showcasBg-home.png";
import showcaseUniversities from "../../assets/global/showcasBg-universities.png";
import showcaseTeachers from "../../assets/global/showcasBg-teachers.png";
import teacherTextBg from "../../assets/teachers/teacherTextBg.png";
import contactBg from "../../assets/global/showcasBg-contact.png";
import { AcessTokenContext } from "../../contexts/accessTokenContext";
import { TakeTestContext } from "../../contexts/TakeTestContext";

const Showcase = ({
  bgName,
  title,
  text,
  btnText1,
  btnText2,
  btnText3,
  btnText4,
}) => {
  const { registered, userRole, connectedCenter } = useContext(
    AcessTokenContext
  );
  const { allowTakeTest, setallowTakeTest } = useContext(TakeTestContext);

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

  useEffect(() => {
    connectedCenter ? setallowTakeTest(true) : setallowTakeTest(false);
  }, [connectedCenter]);

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
              <Tooltip
                placement='bottom'
                title={`${
                  allowTakeTest
                    ? "Siz o'quv markazga bog'langansiz va test ishlay olasiz"
                    : "Test ishlash uchun yuqoridagi yonib turgan so'roq orqali qaysidir o'quv markazga bog'laning"
                }`}
                color='green'
              >
                <Link to={`${allowTakeTest ? "/choose" : "#"}`}>
                  {btnText1 && (
                    <Button
                      text={btnText1}
                      bgClass={`${allowTakeTest ? "blueBtn" : "disabled"}`}
                    />
                  )}
                </Link>
              </Tooltip>
            )}

            {registered &&
              (userRole === "teacher" || userRole === "educational") && (
                <Link to='/create-test'>
                  {btnText3 && <Button text={btnText3} bgClass={"blueBtn"} />}
                </Link>
              )}
            {registered && userRole === "educational" && (
              <Link to='/insert-info-center'>
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

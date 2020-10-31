import React, { useState } from "react";
import Switches from "../components/register/Switches";
import AntForm from "../components/register/AntForm";
import { Redirect } from "react-router-dom";

import "antd/dist/antd.css";

const Registration = () => {
  // Switch roles states
  const [teacher, setTeacher] = useState(true);
  const [student, setStudent] = useState(false);
  const [center, setCenter] = useState(false);

  const toggleTeacher = (checked) => {
    if (teacher) {
      setTeacher(false);
    } else {
      setTeacher(true);
      setStudent(false);
      setCenter(false);
    }
  };

  const toggleStudent = (checked) => {
    if (student) {
      setStudent(false);
    } else {
      setStudent(true);
      setTeacher(false);
      setCenter(false);
    }
  };

  const toggleCenter = (checked) => {
    if (center) {
      setCenter(false);
    } else {
      setCenter(true);
      setTeacher(false);
      setStudent(false);
    }
  };

  // Send user Data
  const [currentUrl, setcurrentUrl] = useState(
    "https://itriceapp.apicrm.online/api/auth/signup"
  );

  const [redirect, setredirect] = useState(false);

  const setRedirect = () => {
    setredirect(true);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/login' />;
    }
  };

  const getInputs = (userInfo) => {
    console.log(userInfo);
    fetch(currentUrl, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((apiRes) => {
        setRedirect();
      });
  };

  return (
    <div className='register-page'>
      <div className='regbg'></div>
      {renderRedirect()}
      <div className='container'>
        <h1 className='welcome-site'>Saytimizga xush kelibsiz </h1>
        <div className='registration'>
          <h2>Ro'yxatdan o'tish ushun ma'lumotlaringizni kiriting</h2>
          <div className='shoose-role'>
            <p>Roýxatdan o'tish uchun tanlang</p>
            <Switches
              teacher={teacher}
              student={student}
              center={center}
              toggleTeacher={toggleTeacher}
              toggleStudent={toggleStudent}
              toggleCenter={toggleCenter}
            />
          </div>
          <div className='reg-content'>
            <AntForm
              getInputs={getInputs}
              teacher={teacher}
              student={student}
              center={center}
            />

            <div className='register-img'>
              <img src={require("../assets/home/registrationImg.svg")} alt='' />
            </div>
          </div>
          <div className='register-warning'>
            <img src={require("../assets/register/warnImg.png")} alt='' />
            <p>
              Ro‘yxatdan o‘tganingizdan so‘ng to‘liq shaxsiy ma’lumotlaringizni
              o‘ng-yuqori burchakdagi belgi orqali o‘zgartirishingiz mumkin{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

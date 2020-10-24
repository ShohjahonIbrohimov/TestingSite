import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Button from "../components/global/Button";
import RegisterForm from "../components/register/RegisterForm";
import Switches from "../components/register/Switches";
import AntForm from "../components/register/AntForm";
import axios from "axios";
import LoginForm from "./LoginForm";
import { message } from "antd";

import "antd/dist/antd.css";
import { AcessTokenContext } from "../contexts/accessTokenContext";

const Registration = () => {
  const [redirect, setredirect] = useState(false);
  const [loading, setloading] = useState(false);
  const { registerUser, riseUpAccess, setriseUpAccess } = useContext(
    AcessTokenContext
  );

  const authenticateUser = (values) => {
    console.log(values);
    axios
      .post("https://itriceapp.apicrm.online/api/auth/signin ", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        setloading(false);
        let data = res.data;
        registerUser();
        setredirect(true);
        localStorage.setItem("riseUpAccess", JSON.stringify(data));
        setriseUpAccess(data);
      })
      .catch((err) => {
        setloading(false);
        error();
      });
  };

  const error = () => {
    message.error("Elektron pochta yoki parol noto'g'ri");
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='login-page'>
      <div className='regbg'></div>
      {renderRedirect()}
      <div className='container'>
        <h1 className='welcome-site'>Saytimizga xush kelibsiz </h1>
        <div className='registration'>
          <LoginForm
            authenticateUser={authenticateUser}
            loading={loading}
            setloading={setloading}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;

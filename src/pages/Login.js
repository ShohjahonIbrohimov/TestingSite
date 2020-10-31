import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import { message } from "antd";

import "antd/dist/antd.css";
import { AcessTokenContext } from "../contexts/accessTokenContext";

const Registration = () => {
  const [redirect, setredirect] = useState(false);
  const [loading, setloading] = useState(false);
  const { setRegistered, setriseUpAccess } = useContext(AcessTokenContext);

  const authenticateUser = (values) => {
    axios
      .post("https://itriceapp.apicrm.online/api/auth/signin ", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        setloading(false);
        let data = res.data;
        setriseUpAccess(data);
        localStorage.setItem("riseUpAccess", JSON.stringify(data));
        setRegistered(true);
        setredirect(true);
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

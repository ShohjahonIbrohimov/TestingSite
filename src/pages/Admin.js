import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import AdminTabs from "../components/usesettings/Tabs";
import { message } from "antd";

import "antd/dist/antd.css";
import { AcessTokenContext } from "../contexts/accessTokenContext";

const Registration = () => {
  const [redirect, setredirect] = useState(false);
  const [students, setstudents] = useState([]);
  const [loading, setloading] = useState(false);
  const { setRegistered, setriseUpAccess, riseUpAccess } = useContext(
    AcessTokenContext
  );

  useEffect(() => {
    axios
      .get("https://itriceapp.apicrm.online/api/auth/student/all", {
        headers: {
          "x-access-token": riseUpAccess.accessToken,
        },
      })
      .then((res) => {
        setstudents(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const error = () => {
    message.error("Elektron pochta yoki parol noto'g'ri");
  };

  return (
    <div className='login-page'>
      <div className='regbg'></div>
      <div className='container'>
        <div className='registration'>
          <AdminTabs students={students} />
        </div>
      </div>
    </div>
  );
};

export default Registration;

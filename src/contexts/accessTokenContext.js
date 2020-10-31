import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AcessTokenContext = createContext();

const getlocalData = () => {
  const localData = JSON.parse(localStorage.getItem("riseUpAccess"));
  return localData;
};

const AccessTokenContextProvider = (props) => {
  const [registered, setRegistered] = useState(false);
  const [riseUpAccess, setriseUpAccess] = useState(getlocalData());
  const [avatar, setAvatar] = useState(null);
  const [userRole, setuserRole] = useState(null);
  const [specialisation, setspecialisation] = useState("");
  const [studentID, setstudentID] = useState("");
  const [userInfo, setuserInfo] = useState({})

  useEffect(() => {
    if (riseUpAccess === null) {
      console.log("happened");
      setRegistered(false);
    } else if (
      riseUpAccess.api === "IT RISE UP" &&
      riseUpAccess.hasOwnProperty("accessToken")
    ) {
      setRegistered(true);
    }
  }, []);

  const authMe = () => {
    if (riseUpAccess) {
      axios
        .get("https://itriceapp.apicrm.online/api/auth/me", {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
          "Content-Type": "application/json",
        })
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          let avatarUrl = res.data.avatar;
          setuserRole(res.data.rolesUser[0].name);
          setspecialisation(res.data.specialisation);
          setAvatar(avatarUrl);
          setstudentID(res.data._id);
          setuserInfo({
            name: data.name,
            surname: data.surname,
            email: data.email,
            birthdate: data.birthdate,

          })
        });
    }
  };

  return (
    <AcessTokenContext.Provider
      value={{
        registered,
        riseUpAccess,
        avatar,
        setAvatar,
        authMe,
        userRole,
        setriseUpAccess,
        specialisation,
        studentID,
        setRegistered,
        userInfo,
      }}
    >
      {props.children}
    </AcessTokenContext.Provider>
  );
};

export default AccessTokenContextProvider;

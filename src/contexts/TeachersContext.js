import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TeachersContext = createContext();

const getlocalData = () => {
  const localData = JSON.parse(localStorage.getItem("riseUpAccess"));
  return localData;
};

const TeachersContextProvider = (props) => {
  const [teachers, setteachers] = useState([]);
  const [riseUpAccess, setriseUpAccess] = useState(getlocalData());

  useEffect(() => {
    // Get teachers
    if (riseUpAccess !== null) {
      axios
        .get("https://itriceapp.apicrm.online/api/auth/teacher/me", {
          headers: {
            "x-access-token": riseUpAccess.accessToken,
          },
        })
        .then((res) => {
          let teachersArr = [];
          res.data.map((t) => {
            teachersArr.push({
              firstname: t.name,
              lastname: t.surname,
              birthdate: t.birthdate,
              email: t.email,
              specialisation: t.specialisation,
              username: t.username,
              key: t._id,
            });
          });
          setteachers(teachersArr);
        });
    }
  }, []);

  return (
    <TeachersContext.Provider value={{ teachers, setteachers }}>
      {props.children}
    </TeachersContext.Provider>
  );
};

export default TeachersContextProvider;

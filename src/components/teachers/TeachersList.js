import React, { useContext } from "react";
import TeacherCard from "./TeacherCard";
import { TeachersContext } from "../../contexts/TeachersContext";

const TeachersList = ({ teachers, setteacherShow }) => {
  // const { teachers } = useContext(TeachersContext);
  console.log(teachers);
  return (
    <div className='container'>
      <div className='teachers-list'>
        {teachers.map((teacher, i) => {
          return (
            <TeacherCard
              setteacherShow={setteacherShow}
              key={i}
              name={teacher.name}
              // name={teacher.lastname}
              text={teacher.aboutTeacher}
              id={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeachersList;

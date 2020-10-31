import React from "react";
import TeacherCard from "./TeacherCard";

const TeachersList = ({ teachers }) => {
  return (
    <div className='container'>
      <div className='teachers-list'>
        {teachers.map((teacher) => {
          return (
            <TeacherCard
              key={teacher.id}
              name={teacher.fullname}
              text={teacher.text}
              id={teacher.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeachersList;

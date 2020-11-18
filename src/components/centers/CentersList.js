import React from "react";
import CenterCard from "./CenterCard";

const TeachersList = ({ centers }) => {
  console.log(centers);
  return (
    <div className='teachers-list'>
      <div className='container'>
        {centers.map((center) => {
          return (
            <CenterCard
              key={center._id}
              name={center.centerName}
              text={center.examDesc}
              id={center._id}
              imgUrl={center.mainImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeachersList;

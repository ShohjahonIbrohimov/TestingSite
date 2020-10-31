import React from "react";
import UniverListItem from "./UniverListItem";
import universities from "../../data/universities.json";

const UniversitiesList = () => {
  return (
    <div className='container'>
      <div className='universities-list'>
        {universities.map((univer) => {
          return (
            <UniverListItem
              key={univer.acronym}
              univerName={univer.univerName}
              acronym={univer.acronym}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UniversitiesList;

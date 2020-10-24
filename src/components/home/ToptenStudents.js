import React, { useContext } from "react";
import TopboardTitle from "./TopboardTitle";
import ToptenStudent from "./ToptenStudent";
import { StResultsContext } from "../../contexts/StResultsContext";

const ToptenStudents = () => {
  const { topTenSts } = useContext(StResultsContext);

  return (
    <div>
      <TopboardTitle title="TOP O'NLIK" size={2} />
      <div className='topten-cards'>
        {topTenSts.map((st) => {
          return (
            <ToptenStudent
              key={st._id}
              imgUrl={st.image}
              place={st.top}
              name={`${st.name} ${st.surname}`}
              adress={st.сity}
              coeffiCient={st.coeffiCient}
              correctAnswers={st.correctAnswers}
              color={st.top > 0 && st.top <= 3 ? "#ffc259" : "#9acd5d"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToptenStudents;

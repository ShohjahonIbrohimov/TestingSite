import React, { createContext, useState, useEffect } from "react";
// deps
import axios from "axios";

export const StResultsContext = createContext();

const StResultsContextProvider = (props) => {
  const [topTenSts, settopTenSts] = useState([]);
  const [topFiveSts, settopFiveSts] = useState([]);

  function compare(a, b) {
    const coefA = a.coeffiCient;
    const coefB = b.coeffiCient;

    const correctA = a.correctAnswers;
    const correctB = b.correctAnswers;

    let comparison = 0;
    if (coefA > coefB) {
      comparison = 1;
    } else if (coefA < coefB) {
      comparison = -1;
    } else {
      if (correctA > correctB) {
        comparison = 1;
      } else if (correctA > correctB) {
        comparison = -1;
      }
    }
    return comparison * -1;
  }

  let cancel;
  const getStResults = async () => {
    try {
      const res = await axios
        .get("https://itriceapp.apicrm.online/api/riceapp/online/all", {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
        .then((res) => {
          let topStudents = res.data.data;
          // Get stduents with top: 1 and the rest into separate arrays
          let top1Students = topStudents.filter((student) => student.top === 1);
          let restStudents = topStudents.filter((student) => {
            return student.top < 9 && student.top !== 1;
          });

          // Sort top 1 student in order
          top1Students.sort(compare);
          for (let i = 0; i < top1Students.length; i++) {
            top1Students[i].top = i + 1;
          }

          // Sort the rest students
          for (let i = 1; i <= restStudents.length; i++) {
            restStudents[i - 1].top = top1Students.length + i;
          }

          settopTenSts([...top1Students, ...restStudents]);
          settopFiveSts([...top1Students, restStudents[0], restStudents[1]]);
        });

      return topFiveSts;
    } catch (err) {
      // Display error
    }
  };

  useEffect(() => {
    getStResults();

    return () => cancel();
  }, []);

  return (
    <StResultsContext.Provider value={{ topTenSts, topFiveSts, getStResults }}>
      {props.children}
    </StResultsContext.Provider>
  );
};

export default StResultsContextProvider;

import React, { useEffect, useState } from "react";
// components
import Showcase from "../components/global/Showcase";
import PageTitle from "../components/global/PageTitle";
import Center from "../components/centers/Center";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CentersList from "../components/centers/CentersList";
import axios from "axios";

const Teachers = () => {
  const [centers, setcenters] = useState([]);

  useEffect(() => {
    axios.get("https://itriceapp.apicrm.online/api/about").then((res) => {
      console.log(res.data.data);
      setcenters(res.data.data);
    });
  }, []);

  // const centers = [
  //   {
  //     id: 1,
  //     fullname: "Ziyokor",
  //     text:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde. obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde. Lorem ipsum dolor sit ",
  //   },
  //   {
  //     id: 2,
  //     fullname: "Beruniy",
  //     text:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde. Lorem ipsum dolor sit obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde. Lorem ipsum dolor sit",
  //   },
  //   {
  //     id: 3,
  //     fullname: "Yuksalish",
  //     text:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis animi obcaecati nostrum nam eos explicabo! Ullam nihil aspernatur hic unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed verita",
  //   },
  // ];

  return (
    <Router>
      <div className='centers-page'>
        <div className='container'>
          <Showcase
            bgName='teachers'
            title="O'QITUVCHLAR"
            text="O'qituvchi haqida ma'lumotlar"
          />
          <PageTitle title="Saytimizdag eng na'munali o'quv markazlari va ular haqidagi ma'lumotlarni ushbu bo'limdan olishingiz mumkin" />
        </div>
        <Switch>
          <Route
            exact
            path='/centers'
            component={() => <CentersList centers={centers} />}
          />

          <Route
            exact
            path='/centers/:id'
            render={(routerProps) => Center(centers, routerProps)}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Teachers;

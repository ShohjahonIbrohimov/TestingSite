import React from "react";
import Showcase from "../components/global/Showcase";
import CarouselUnivers from "../components/universities/CarouselUnivers";
import PageTitle from "../components/global/PageTitle";
import ChooseRegion from "../components/universities/ChooseRegion";
import UniversitiesList from "../components/universities/UniversitiesList";
import UniversityInfo from "../components/universities/UniversityInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Universities = () => {
  return (
    <Router>
      <Switch>
        <div className='universities-page'>
          <Showcase
            bgName='universities'
            title="Oliy Ta'lim Muassasalari"
            text='Respublika bo’ylab oliy ta’lim muassasalari va
ularga qabul yo‘nalishlari bilan 
tanishishingiz mumkin'
          />
          <CarouselUnivers />
          <PageTitle
            title='Respublika oliy ta’lim muassasalari '
            text='Respublika oliy ta’lim muassasalari ta’lim yo‘nalishlari va kirish ballari
haqida ushbu ruknda o’qishingiz mumkin'
          />
          <ChooseRegion />
          <Route exact path='/universities' component={UniversitiesList} />
          {/* <Route exact path='/tatu' component={UniversityInfo} />
          <Route exact path='/tdyu' component={UniversityInfo} />
          <Route exact path='/tdpu' component={UniversityInfo} />
          <Route exact path='/tdau' component={UniversityInfo} />
          <Route exact path='/tdtu' component={UniversityInfo} /> */}
          <Route
            exact
            path='/universities/:id'
            // render={(routerProps) => UniversityInfo}
            component={UniversityInfo}
          />
        </div>
      </Switch>
    </Router>
  );
};

export default Universities;

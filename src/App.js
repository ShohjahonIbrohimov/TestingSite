import React from "react";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Universities from "./pages/Universities";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import TestProcess from "./pages/TestProcess";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import Centers from "./pages/Centers";
import ChooseTestSubs from "./components/home/ChooseTestSubs";
import CreateTest from "./pages/CreateTest";
import TestCollections from "./pages/TestCollections";
import Admin from "./pages/Admin";

import Loader from "./components/global/Loader";

// css
import "./styles/main.css";
// routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StResultsContextProvider from "./contexts/StResultsContext";
import TestResults from "./pages/TestResults";
import AccessTokenContextProvider from "./contexts/accessTokenContext";
import QuestionsContextProvider from "./contexts/QuestionsContext";
import LoaderContextProvider from "./contexts/LoaderContext";
import TestResultContextProvider from "./contexts/TestResultContext";

function App() {
  return (
    <Router>
      <div className='App'>
        <TestResultContextProvider>
          <LoaderContextProvider>
            <QuestionsContextProvider>
              <StResultsContextProvider>
                <AccessTokenContextProvider>
                  <Navbar />
                  <Switch>
                    <div className='page-wrapper'>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/subjects' component={Subjects} />
                      <Route
                        exact
                        path='/universities'
                        component={Universities}
                      />
                      <Route exact path='/teachers' component={Teachers} />
                      <Route exact path='/centers' component={Centers} />
                      <Route exact path='/contact' component={Contact} />
                      <Route
                        exact
                        path='/registration'
                        component={Registration}
                      />
                      <Route exact path='/test' component={TestProcess} />
                      <Route exact path='/settings' component={UserSettings} />
                      <Route exact path='/results' component={TestResults} />
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/choose' component={ChooseTestSubs} />
                      <Route exact path='/create-test' component={CreateTest} />
                      <Route exact path='/admin' component={Admin} />

                      <Route
                        exact
                        path='/test-collections'
                        component={TestCollections}
                      />
                      <Loader />
                    </div>
                  </Switch>
                  <Footer />
                </AccessTokenContextProvider>
              </StResultsContextProvider>
            </QuestionsContextProvider>
          </LoaderContextProvider>
        </TestResultContextProvider>
      </div>
    </Router>
  );
}

export default App;

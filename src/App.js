import "./App.css";
import Navbar from "./components/navbar";
import News from "./components/news";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <Navbar />

          <Routes>
            <Route exact path="/app">
              element={<News pageSize={9} country="us" category="general" />}
            </Route>
            <Route exact path="/business">
              element={<News pageSize={9} country="us" category="business" />}
            </Route>
            <Route exact path="/entertainment">
              element=
              {<News pageSize={9} country="us" category="entertainment" />}
            </Route>
            <Route exact path="/general">
              element={<News pageSize={9} country="us" category="general" />}
            </Route>
            <Route exact path="/health">
              element={<News pageSize={9} country="us" category="health" />}
            </Route>
            <Route exact path="/science">
              element={<News pageSize={9} country="us" category="science" />}
            </Route>
            <Route exact path="/sports">
              element={<News pageSize={9} country="us" category="sports" />}
            </Route>
            <Route exact path="/technology">
              element={<News pageSize={9} country="us" category="technology" />}
            </Route>
          </Routes>
        </Router> */}
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" pageSize={9} country="us" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News key="business" pageSize={9} country="us" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News key="entertainment" pageSize={9} country="us" category="entertainment" />
              }
            />
            <Route
              exact
              path="/general"
              element={<News key="general" pageSize={9} country="us" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" pageSize={9} country="us" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" pageSize={9} country="us" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" pageSize={9} country="us" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News key="technology" pageSize={9} country="us" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

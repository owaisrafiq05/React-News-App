import "./App.css";
import Navbar from "./components/navbar";
import News from "./components/news";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        {/* <Router>
          <Navbar />

          <Routes>
            <Route exact path="/app">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="general" />}
            </Route>
            <Route exact path="/business">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="business" />}
            </Route>
            <Route exact path="/entertainment">
              element=
              {<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="entertainment" />}
            </Route>
            <Route exact path="/general">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="general" />}
            </Route>
            <Route exact path="/health">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="health" />}
            </Route>
            <Route exact path="/science">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="science" />}
            </Route>
            <Route exact path="/sports">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="sports" />}
            </Route>
            <Route exact path="/technology">
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey} pageSize={9} country="us" category="technology" />}
            </Route>
          </Routes>
        </Router> */}
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress = {this.setProgress}  key="general" pageSize={9} country="us" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress = {this.setProgress}  key="business" pageSize={9} country="us" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {this.setProgress}  key="entertainment" pageSize={9} country="us" category="entertainment" />
              }
            />
            <Route
              exact
              path="/general"
              element={<News setProgress = {this.setProgress}  key="general" pageSize={9} country="us" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress = {this.setProgress}   key="health" pageSize={9} country="us" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress = {this.setProgress}  key="science" pageSize={9} country="us" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress = {this.setProgress}   key="sports" pageSize={9} country="us" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News setProgress = {this.setProgress}  key="technology" pageSize={9} country="us" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

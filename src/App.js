import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        {/* <News size={100} country="PK" topic="news" /> */}

        <Routes>
          <Route
            exact
            path="/"
            element={<News key="news" size={100} country="PK" topic="news" />}
          />
          <Route
            exact
            path="/sport"
            element={<News key="sport" size={100} country="PK" topic="sport" />}
          />
          <Route
            exact
            path="/tech"
            element={<News key="tech" size={100} country="PK" topic="tech" />}
          />
          <Route
            exact
            path="/world"
            element={<News key="world" size={100} country="PK" topic="world" />}
          />
          <Route
            exact
            path="/finance"
            element={
              <News key="finance" size={100} country="PK" topic="finance" />
            }
          />
          <Route
            exact
            path="/politics"
            element={
              <News key="politics" size={100} country="PK" topic="politics" />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News key="business" size={100} country="PK" topic="business" />
            }
          />
          <Route
            exact
            path="/economics"
            element={
              <News key="economics" size={100} country="PK" topic="economics" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                size={100}
                country="PK"
                topic="entertainment"
              />
            }
          />
          <Route
            exact
            path="/beauty"
            element={
              <News key="beauty" size={100} country="PK" topic="beauty" />
            }
          />
          <Route
            exact
            path="/travel"
            element={
              <News key="travel" size={100} country="PK" topic="travel" />
            }
          />
          <Route
            exact
            path="/music"
            element={<News key="music" size={100} country="PK" topic="music" />}
          />
          <Route
            exact
            path="/food"
            element={<News key="food" size={100} country="PK" topic="food" />}
          />
          <Route
            exact
            path="/science"
            element={
              <News key="science" size={100} country="PK" topic="science" />
            }
          />
          <Route
            exact
            path="/gaming"
            element={
              <News key="gaming" size={100} country="PK" topic="gaming" />
            }
          />
          <Route
            exact
            path="/energy"
            element={
              <News key="energy" size={100} country="PK" topic="energy" />
            }
          />
          <Route exact path="/about" element={<About key="about" />} />
        </Routes>
      </Router>
    );
  }
}

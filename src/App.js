import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import "./App.css";

export default function App() {
  const size = 10;

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={<News key="news" size={size} country="PK" topic="news" />}
        />
        <Route
          exact
          path="/sport"
          element={<News key="sport" size={size} country="PK" topic="sport" />}
        />
        <Route
          exact
          path="/tech"
          element={<News key="tech" size={size} country="PK" topic="tech" />}
        />
        <Route
          exact
          path="/world"
          element={<News key="world" size={size} country="PK" topic="world" />}
        />
        <Route
          exact
          path="/finance"
          element={
            <News key="finance" size={size} country="PK" topic="finance" />
          }
        />
        <Route
          exact
          path="/politics"
          element={
            <News key="politics" size={size} country="PK" topic="politics" />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News key="business" size={size} country="PK" topic="business" />
          }
        />
        <Route
          exact
          path="/economics"
          element={
            <News key="economics" size={size} country="PK" topic="economics" />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              key="entertainment"
              size={size}
              country="PK"
              topic="entertainment"
            />
          }
        />
        <Route
          exact
          path="/beauty"
          element={
            <News key="beauty" size={size} country="PK" topic="beauty" />
          }
        />
        <Route
          exact
          path="/travel"
          element={
            <News key="travel" size={size} country="PK" topic="travel" />
          }
        />
        <Route
          exact
          path="/music"
          element={<News key="music" size={size} country="PK" topic="music" />}
        />
        <Route
          exact
          path="/food"
          element={<News key="food" size={size} country="PK" topic="food" />}
        />
        <Route
          exact
          path="/science"
          element={
            <News key="science" size={size} country="PK" topic="science" />
          }
        />
        <Route
          exact
          path="/gaming"
          element={
            <News key="gaming" size={size} country="PK" topic="gaming" />
          }
        />
        <Route
          exact
          path="/energy"
          element={
            <News key="energy" size={size} country="PK" topic="energy" />
          }
        />
        <Route exact path="/about" element={<About key="about" />} />
      </Routes>
    </Router>
  );
}

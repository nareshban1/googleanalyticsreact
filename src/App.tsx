import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga4";
import { Link, Route, Routes } from "react-router-dom";

ReactGA.initialize("G-WJ9JJTMN1V");
ReactGA.send("pageview");
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>HOME PAGE</p>
          </header>
        </Route>
        <Route path="/about">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>ABOUT PAGE</p>
          </header>
        </Route>
        <Route path="/contact">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>CONTACT PAGE</p>
          </header>
        </Route>
      </Routes>
      <Link to={"/"}>HOME</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Link to={"/contact"}>CONTACT</Link>
    </div>
  );
}

export default App;

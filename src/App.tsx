import React from "react";
import "./App.css";
import ReactGA from "react-ga4";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

ReactGA.initialize("G-WJ9JJTMN1V");
ReactGA.send("pageview");
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Link to={"/"}>HOME</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Link to={"/contact"}>CONTACT</Link>
    </div>
  );
}

export default App;

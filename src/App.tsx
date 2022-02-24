import React from "react";
import "./App.css";
import ReactGA from "react-ga4";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { UserContextProvider } from "./context/AuthContext";
import Login from "./routes/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

ReactGA.initialize("G-WJ9JJTMN1V");
ReactGA.send("pageview");
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoutes children={<Home />} />} />
        <Route
          path="/about"
          element={<ProtectedRoutes children={<About />} />}
        />
        <Route
          path="/contact"
          element={<ProtectedRoutes children={<Contact />} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

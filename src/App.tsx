import React from "react";
import "./App.css";
import ReactGA from "react-ga";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { UserContextProvider } from "./context/AuthContext";
import Login from "./routes/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

let trackingCode: string | undefined =
  process.env.REACT_APP_ANALYTICS_TRACKING_CODE;
if (trackingCode !== undefined) {
  ReactGA.initialize(trackingCode);
}

function App() {
  const location = useLocation();

  ReactGA.pageview(location.pathname);
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

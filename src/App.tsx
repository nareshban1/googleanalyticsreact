import React, { useEffect } from "react";
import "./App.css";
import ReactGA from "react-ga";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { useAuth } from "./context/AuthContext";
import Login from "./routes/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const location = useLocation();
  const { loading, currentUser } = useAuth();

  let trackingCode: any = process.env.REACT_APP_ANALYTICS_TRACKING_CODE;

  ReactGA.initialize(trackingCode, { debug: true });

  // setting pageview for every route change
  useEffect(() => {
    ReactGA.pageview(location.pathname);
    ReactGA.set({ userId: currentUser?.uid });
  }, [location, currentUser]);

  return (
    <>
      {loading ? (
        <>LOADING</>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default App;

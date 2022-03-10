import React, {
  ReactElement,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logout from "../routes/Logout";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    if (currentUser !== null || currentUser !== undefined) {
      setCheckUser(true);
    }
  }, [currentUser]);

  useEffect(() => {
    checkUserLogin();
  }, [checkUser]);

  const checkUserLogin = () => {
    if (checkUser === false) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {checkUser ? (
        <>
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/contact"}>CONTACT</Link>
          <Logout />
          {children}
        </>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default ProtectedRoutes;

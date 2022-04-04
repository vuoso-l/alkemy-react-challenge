import { createContext, useState } from "react";

import SweetAlert from "../helpers/SweetAlert";

const IsLoginContext = createContext();

const loginInitialValue = localStorage.getItem("userLogin") || false;
const IsLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(loginInitialValue);

  const login = () => {
    if (localStorage.getItem("userToken")) {
      localStorage.setItem("userLogin", true);
      setIsLogin(localStorage.getItem("userLogin"));
    } else {
      setIsLogin(false);
    }
  };

  const closeSession = () => {
    SweetAlert.messageCloseSession(
      "¿Estás seguro que quieres cerrar sesión?",
      () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userLogin");
        setIsLogin(false);
      }
    );
  };

  const data = { isLogin, login, closeSession };

  return (
    <IsLoginContext.Provider value={data}>{children}</IsLoginContext.Provider>
  );
};

export { IsLoginProvider };

export default IsLoginContext;

import { createContext, useState } from "react";
import SweetAlert from "../helpers/SweetAlert";

const IsLoginContext = createContext();

const IsLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  }
  const closeSession = () => {
    SweetAlert.messageDelete("¿Estás seguro que quieres cerrar sesión?", () => {
      localStorage.removeItem("userToken");
      setIsLogin(false);
    })
  }

  const data = { isLogin, login, closeSession };

  return <IsLoginContext.Provider value={data}>{children}</IsLoginContext.Provider>;
};

export { IsLoginProvider };

export default IsLoginContext;

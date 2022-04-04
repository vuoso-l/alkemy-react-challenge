import { createContext, useState } from "react";

const IsOpenContext = createContext();

const IsOpenProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDetail = () => {
    setIsOpen(true);
  };
  const closeDetail = () => setIsOpen(false);

  const data = { isOpen, openDetail, closeDetail };

  return (
    <IsOpenContext.Provider value={data}>{children}</IsOpenContext.Provider>
  );
};

export { IsOpenProvider };

export default IsOpenContext;

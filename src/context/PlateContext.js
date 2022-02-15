import axios from "axios";
import { createContext, useState } from "react";
import SweetAlert from "../helpers/SweetAlert";

const PlateContext = createContext();

const PlateProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [plate, setPlate] = useState([]);

  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchQuery();
  };

  const getSearchQuery = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a6e1e1d820c3443289f108a865a8dfb5&query=${searchQuery}&addRecipeInformation=true`
      );
      setPlate(response.data.results);
    } catch (error) {
      SweetAlert.messageError(error);
    }
  };
  
  const data = { plate, handleChangeQuery, handleSubmit, getSearchQuery };

  return <PlateContext.Provider value={data}>{children}</PlateContext.Provider>;
};

export { PlateProvider };

export default PlateContext;
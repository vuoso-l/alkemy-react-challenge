import axios from "axios";
import { createContext, useState } from "react";
import SweetAlert from "../helpers/SweetAlert";

const PlateContext = createContext();

const PlateProvider = ({ children }) => {
  const [plate, setPlate] = useState([]);

  const getSearchQuery = async (searchQueryValue) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a6e1e1d820c3443289f108a865a8dfb5&query=${searchQueryValue.search}&addRecipeInformation=true`
      );
      response.data.results.length > 0
        ? setPlate(response.data.results)
        : SweetAlert.messageError(
            `Ooops! La palabra "${searchQueryValue.search}" no fue encontrada`,
            ""
          );
    } catch (error) {
      SweetAlert.messageError("Ooops! Ocurrió un error!", error);
    }
  };

  const data = { plate, getSearchQuery };

  return <PlateContext.Provider value={data}>{children}</PlateContext.Provider>;
};

export { PlateProvider };

export default PlateContext;

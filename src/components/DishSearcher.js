import React, { useContext } from "react";
import MenuProduct from "./MenuProduct";
import SearcherForm from "./SearcherForm";
import MenuContext from "../context/MenuContext";
import PlateContext from "../context/PlateContext";

const DishSearcher = () => {
  const { plate } = useContext(PlateContext);
  const { addMenuItem } = useContext(MenuContext);

  return (
    <div>
      <h2>Buscador de platos</h2>
      <SearcherForm />
      {plate.map((item) => {
        return (
          <>
            <MenuProduct props={item} />
            <button onClick={() => addMenuItem(item)}>Agregar</button>
          </>
        );
      })}
    </div>
  );
};

export default DishSearcher;

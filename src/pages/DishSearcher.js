import React, { useContext } from "react";
import Header from "../components/Header";
import MenuProduct from "../components/MenuProduct";
import SearcherForm from "../components/SearcherForm";
import MenuContext from "../context/MenuContext";
import PlateContext from "../context/PlateContext";

const DishSearcher = () => {
  const { plate } = useContext(PlateContext);
  const { addMenuItem } = useContext(MenuContext);

  return (
    <div>
      <Header />
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

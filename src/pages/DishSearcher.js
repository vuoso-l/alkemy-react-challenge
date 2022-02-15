import React, { useContext } from "react";
import Header from "../components/Header";
import MenuProduct from "../components/MenuProduct";
import MenuContext from "../context/MenuContext";
import PlateContext from "../context/PlateContext";

const DishSearcher = () => {
  const { plate, handleChangeQuery, handleSubmit } = useContext(PlateContext);
  const { addMenuItem } = useContext(MenuContext);

  let idQuery = "menuSearchQuery";

  return (
    <div>
      <Header />
      <h2>Buscador de platos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={idQuery}>
          Buscá tu menú por palabra clave
          <input
            type="text"
            name={idQuery}
            id={idQuery}
            onChange={handleChangeQuery}
          ></input>
        </label>
        <input type="submit" value="Enviar"></input>
      </form>
      {plate.map((item) => {
        return (
          <>
            <MenuProduct
              props={item}
            />
            <button onClick={() => addMenuItem(item)}>Agregar</button>
          </>
        );
      })}
    </div>
  );
};

export default DishSearcher;

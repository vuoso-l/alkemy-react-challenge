import React, { useContext } from "react";
import Header from "../components/Header";
import MenuProduct from "../components/MenuProduct";
import MenuContext from "../context/MenuContext";

const Homepage = () => {
  const { menu } = useContext(MenuContext);
  
  return (
    <div>
      <Header />
      <h2>Menú restaurant</h2>
      <h3>Valor total: ${menu.amount}</h3>
      <h3>Tiempo promedio de preparación: {menu.cookingAverage}</h3>
      <h3>Tiempo promedio de health score: {menu.healthScoreAverage}</h3>
      {menu.menuProducts.map((item) => (
        <MenuProduct
          props={item}
        />
      ))}      
    </div>
  );
};

export default Homepage;

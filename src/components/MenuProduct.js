import React from "react";

const MenuProduct = () => {
  return (
    <div>
      <h3>Nombre del plato</h3>
      <img
        style={{ width: "300px", height: "300px" }}
        src="https://www.recetasderechupete.com/wp-content/uploads/2020/01/Menu-semanal-tuper.jpg"
        alt=""
      ></img>
      <p>Características del plato</p>
      <button>Ver detalles</button>
      <button>Eliminar</button>
    </div>
  );
};

export default MenuProduct;

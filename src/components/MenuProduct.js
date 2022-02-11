import React from "react";

const MenuProduct = ({id, image, title, cuisines, diet, sourceUrl, deleteMenuItem}) => {
  
  return (
    <div key={id}>
      <h3>{title}</h3>
      <img
        style={{ width: "300px", height: "300px" }}
        src={image}
        alt={title}
      ></img>
      <ul>
        <li>Tipo de cocina: {cuisines}</li>
        <li>Categoría: {diet}</li>
        <li><a href={sourceUrl} target="_blank" rel="noreferrer">Receta</a></li>
      </ul>
      <button>Ver detalles</button>
      <button onClick={() => deleteMenuItem(id)}>Eliminar</button>
    </div>
  );
};

export default MenuProduct;

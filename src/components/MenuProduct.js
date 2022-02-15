import React, { useContext } from "react";
import MenuContext from "../context/MenuContext";

const MenuProduct = ({ props }) => {
  const {
    id,
    image,
    title,
    vegetarian,
    glutenFree,
    veryHealthy,
    cuisines,
    diets,
    sourceUrl,
  } = props || {};
  const { deleteMenuItem } = useContext(MenuContext);
  
  return (
    <section>
      <h3>{title}</h3>
      <img
        style={{ width: "300px", height: "300px" }}
        src={image}
        alt={title}
      ></img>
      <ul>
        <li>Vegetariano: {vegetarian ? "Sí" : "No"}</li>
        <li>Gluten free: {glutenFree ? "Sí" : "No"}</li>
        <li>Saludable: {veryHealthy ? "Sí" : "No"}</li>
        <li>
          Tipo de cocina: {cuisines.length !== 0 ? cuisines : "No definido"}
        </li>
        <li>Categoría: {diets.length !== 0 ? diets : "No definido"}</li>
        <li>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Receta
          </a>
        </li>
      </ul>
      <button>Ver detalles</button>
      <button onClick={() => deleteMenuItem(id)}>Eliminar</button>
    </section>
  );
};

export default MenuProduct;

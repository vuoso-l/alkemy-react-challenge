import React, { useContext } from "react";
import { Card, li } from "react-bootstrap";
import MenuContext from "../context/MenuContext";
import IsOpenContext from "../context/IsOpenContext";
import {
  DeleteButton,
  GralButton,
  GralUl,
  H3Style,
  MenuProductImg,
} from "./BasicTagsStyle";
import { MenuProductStyle } from "./MenuProductStyle";

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
  const { openDetail } = useContext(IsOpenContext);

  return (
    <MenuProductStyle>
      <MenuProductImg
        variant="top"
        src={image}
        alt={title}
        onClick={openDetail}
      />

      <H3Style>{title}</H3Style>
      <GralUl>
        <li>Vegetariano: {vegetarian ? "Sí" : "No"}</li>
        <li>Gluten free: {glutenFree ? "Sí" : "No"}</li>
        <li>Saludable: {veryHealthy ? "Sí" : "No"}</li>
        <li>
          Tipo de cocina: {cuisines.length !== 0 ? cuisines : "No definido"}
        </li>
        <li>Categoría: {diets.length !== 0 ? diets : "No definido"}</li>
      </GralUl>
      <div className="btn-group">
        <GralButton>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Receta
          </a>
        </GralButton>
        <DeleteButton          
          onClick={() => deleteMenuItem(id)}
        >
          Eliminar
        </DeleteButton>
      </div>
    </MenuProductStyle>
  );
};

export default MenuProduct;

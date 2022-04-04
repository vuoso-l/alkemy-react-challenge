import { useContext } from "react";

import MenuContext from "../context/MenuContext";
import IsOpenContext from "../context/IsOpenContext";
import {
  DeleteButton,
  GralButton,
  GralUl,
  H3Style,
  MenuProductImg,
} from "../componentsStyle/BasicTagsStyle";
import { MenuProductStyle } from "../componentsStyle/MenuProductStyle";

const MenuProduct = ({ props }) => {
  const {
    id,
    image,
    title,
    vegan,
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
        <li>Vegano: {vegan ? "Sí" : "No"}</li>
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
        <DeleteButton onClick={() => deleteMenuItem(id)}>Eliminar</DeleteButton>
      </div>
    </MenuProductStyle>
  );
};

export default MenuProduct;

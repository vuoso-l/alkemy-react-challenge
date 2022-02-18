import React, { useContext } from "react";
import MenuProduct from "./MenuProduct";
import SearcherForm from "./SearcherForm";
import MenuContext from "../context/MenuContext";
import PlateContext from "../context/PlateContext";
import { AddButton, H2Style, HomepageSection } from "./BasicTagsStyle";
import { ProductCardStyle } from "./ProductCardStyle";

const DishSearcher = () => {
  const { plate } = useContext(PlateContext);
  const { addMenuItem } = useContext(MenuContext);
  
  return (
    <HomepageSection>
      <H2Style>Buscador de platos</H2Style>
      <SearcherForm />
      {plate.length >= 1 && (
        <ProductCardStyle>
          {plate.map((item) => (
            <div>
              <MenuProduct props={item} />
              <AddButton onClick={() => addMenuItem(item)}>Agregar</AddButton>
            </div>
          ))}
        </ProductCardStyle>
      )}
    </HomepageSection>
  );
};

export default DishSearcher;

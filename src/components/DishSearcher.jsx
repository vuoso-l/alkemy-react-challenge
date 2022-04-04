import { useContext } from "react";

import MenuContext from "../context/MenuContext";
import PlateContext from "../context/PlateContext";
import {
  AddButton,
  H2Style,
  HomepageSection,
} from "../componentsStyle/BasicTagsStyle";
import { ProductCardStyle } from "../componentsStyle/ProductCardStyle";

import MenuProduct from "./MenuProduct";
import SearcherForm from "./SearcherForm";

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
            <div key={item.id}>
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

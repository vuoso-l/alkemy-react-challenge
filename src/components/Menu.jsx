import { useContext } from "react";

import IsOpenContext from "../context/IsOpenContext";
import MenuContext from "../context/MenuContext";
import { ProductCardStyle } from "../componentsStyle/ProductCardStyle";
import { H2Style, HomepageSection } from "../componentsStyle/BasicTagsStyle";

import MenuProduct from "./MenuProduct";

const Menu = () => {
  const { menu } = useContext(MenuContext);
  const { isOpen } = useContext(IsOpenContext);

  return (
    <HomepageSection>
      <H2Style>Menú restaurant</H2Style>
      {menu.menuProducts.length >= 1 && (
        <ProductCardStyle isOpen={isOpen}>
          {menu.menuProducts.map((item) => (
            <div key={item.id}>
              <MenuProduct props={item} />
            </div>
          ))}
        </ProductCardStyle>
      )}
    </HomepageSection>
  );
};

export default Menu;

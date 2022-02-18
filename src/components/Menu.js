import React, { useContext } from "react";
import IsOpenContext from "../context/IsOpenContext";
import MenuProduct from "./MenuProduct";
import MenuContext from "../context/MenuContext";
import { ProductCardStyle } from "./ProductCardStyle";
import { H2Style, HomepageSection } from "./BasicTagsStyle";

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

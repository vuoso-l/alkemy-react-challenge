import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
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
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li">Valor total: ${menu.amount.toFixed(2)}</ListGroup.Item>
        <ListGroup.Item as="li">
          Tiempo promedio de preparación: {menu.cookingAverage.toFixed(2)}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Tiempo promedio de health score: {menu.healthScoreAverage.toFixed(2)}
        </ListGroup.Item>
      </ListGroup>
      {menu.menuProducts.length >= 1 &&
      <ProductCardStyle isOpen={isOpen}>
        {menu.menuProducts.map((item) => (
          <div>
            <MenuProduct props={item} />
            </div>
        ))}
      </ProductCardStyle>}
    </HomepageSection>
  );
};

export default Menu;

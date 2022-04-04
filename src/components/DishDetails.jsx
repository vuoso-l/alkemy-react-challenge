import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import MenuContext from "../context/MenuContext";
import IsOpenContext from "../context/IsOpenContext";
import { DishDetailContainer } from "../componentsStyle/DishDetailsStyle";
import { H2Style } from "../componentsStyle/BasicTagsStyle";

const DishDetails = () => {
  const { menu } = useContext(MenuContext);
  const { isOpen, closeDetail } = useContext(IsOpenContext);
  const handleContainerClick = (e) => e.stopPropagation();

  return (
    <DishDetailContainer isOpen={isOpen} onClick={closeDetail}>
      <button onClick={closeDetail}>x</button>
      <H2Style>Detalles del menú</H2Style>
      <ListGroup className="listGroup" as="ol" numbered onClick={handleContainerClick}>
        <ListGroup.Item as="li">
          Valor total: ${menu.amount.toFixed(2)}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Tiempo promedio de preparación: {menu.cookingAverage.toFixed(2)}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Tiempo promedio de health score: {menu.healthScoreAverage.toFixed(2)}
        </ListGroup.Item>
      </ListGroup>
    </DishDetailContainer>
  );
};

export default DishDetails;

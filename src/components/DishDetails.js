import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import MenuContext from "../context/MenuContext";
import IsOpenContext from "../context/IsOpenContext";

const DishDetails = () => {
  const { menu } = useContext(MenuContext);
  const { isOpen, closeDetail } = useContext(IsOpenContext);
  const handleContainerClick = (e) => e.stopPropagation();

  return (
    <div isOpen={isOpen} onClick={closeDetail}>
      <h2>Detalles del menú</h2>
      <ListGroup as="ol" numbered onClick={handleContainerClick}>
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
    </div>
  );
};

export default DishDetails;

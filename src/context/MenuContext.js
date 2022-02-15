import { createContext, useContext, useEffect, useState } from "react";
import SweetAlert from "../helpers/SweetAlert";
import PlateContext from "./PlateContext";

const MenuContext = createContext();

const getMenuItems = JSON.parse(localStorage.getItem("menuItems"));
const defaultMenu = {
  menuProducts: [],
  amount: 0,
  cookingAverage: 0,
  healthScoreAverage: 0,
};
const menuInitialState = getMenuItems === null ? defaultMenu : getMenuItems;

const MenuProvider = ({ children }) => {
  const { plate } = useContext(PlateContext);
  const [menu, setMenu] = useState(menuInitialState);

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menu));
  }, [menu]);

  const addMenuItem = (product) => {
    const itemFind = plate.find((item) => item.id === product.id);
    console.log(itemFind);
    const menuSize = menu.menuProducts.length + 1;
    let cookingTime = 0;
    let healthSc = 0;
    const avg = menu.menuProducts.map((item) => {
      cookingTime += item.readyInMinutes;
      healthSc += item.healthScore;
    });
    cookingTime += itemFind.readyInMinutes;
    healthSc += itemFind.healthScore;
    const cookingAvg = cookingTime / menuSize;
    const healthAvg = healthSc / menuSize;

    if (menuSize <= 4) {
      setMenu({
        ...menu,
        menuProducts: [...menu.menuProducts, itemFind],
        amount: (menu.amount += itemFind.pricePerServing),
        cookingAverage: cookingAvg,
        healthScoreAverage: healthAvg,
      });
      SweetAlert.messageOk("Ítem agregado!", `Agregaste "${itemFind.title}"`);
    } else {
      SweetAlert.messageError(
        "Ya tenés 4 productos",
        "Para agregarlo, primero tenés que eliminar uno"
      );
    }
  };

  const deleteMenuItem = (id) => {
    const itemIndex = menu.menuProducts.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      const menuWithoutDeleteItem = menu.menuProducts.filter(
        (item, index) => index !== itemIndex
      );
      let menuSize = menuWithoutDeleteItem.length;

      let amount = 0;
      let cookingTime = 0;
      let healthSc = 0;

      const avg = menuWithoutDeleteItem.map((item) => {
        amount += item.pricePerServing;
        cookingTime += item.readyInMinutes;
        healthSc += item.healthScore;
      });
      const cookingAvg = cookingTime / menuSize;
      const healthAvg = healthSc / menuSize;

      SweetAlert.messageDelete("¿Seguro que querés eliminar este ítem?", () => {
        if (menuSize >= 1) {
          setMenu({
            ...menu,
            menuProducts: menuWithoutDeleteItem,
            amount: amount,
            cookingAverage: cookingAvg,
            healthScoreAverage: healthAvg,
          });
        } else {
          setMenu(defaultMenu);
        }
      });
    } else {
      SweetAlert.messageError("Este ítem no forma parte de tu menú", "");
    }
  };

  const data = { menu, setMenu, addMenuItem, deleteMenuItem };

  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
};

export { MenuProvider };

export default MenuContext;

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
  vegAccount: 0,
  noVegAccount: 0,
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
    const menuSize = menu.menuProducts.length + 1;
    let cookingTime = 0;
    let healthSc = 0;
    let veg = 0;
    let noVeg = 0;
    menu.menuProducts.map((item) => {
      return (
        <>
          `
          ${console.log(item.vegan)};
          ${cookingTime += item.readyInMinutes};
          ${healthSc += item.healthScore};
          ${item.vegan ? veg++ : noVeg++};
          `
        </>
      )
    });
    cookingTime += itemFind.readyInMinutes;
    healthSc += itemFind.healthScore;
    const cookingAvg = cookingTime / menuSize;
    const healthAvg = healthSc / menuSize;

    if (itemFind.vegan && veg < 2) {
      console.log("Click en veg");
      setMenu({
        ...menu,
        menuProducts: [...menu.menuProducts, itemFind],
        amount: (menu.amount += itemFind.pricePerServing),
        cookingAverage: cookingAvg,
        healthScoreAverage: healthAvg,
        vegAccount: veg,
        noVegAccount: noVeg,
      });
      SweetAlert.messageOk("Ítem agregado!", `Agregaste "${itemFind.title}"`);
    } else if (!itemFind.vegan && noVeg < 2) {
      console.log("Click en NO veg");
      setMenu({
        ...menu,
        menuProducts: [...menu.menuProducts, itemFind],
        amount: (menu.amount += itemFind.pricePerServing),
        cookingAverage: cookingAvg,
        healthScoreAverage: healthAvg,
        vegAccount: veg,
        noVegAccount: noVeg,
      });
      SweetAlert.messageOk("Ítem agregado!", `Agregaste "${itemFind.title}"`);
    } else {
      SweetAlert.messageError(
        `No podés agregar más productos del tipo "${itemFind.vegan ? "vegano" : "no vegano"
        }"`,
        "Para agregarlo, primero tenés que eliminar uno",
      );
    }
  };

  const deleteMenuItem = (id) => {
    const itemIndex = menu.menuProducts.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      const menuWithoutDeleteItem = menu.menuProducts.filter(
        (item, index) => index !== itemIndex,
      );
      let menuSize = menuWithoutDeleteItem.length;

      let amount = 0;
      let cookingTime = 0;
      let healthSc = 0;
      let veg = 0;
      let noVeg = 0;

      menuWithoutDeleteItem.map((item) => {
        return (
          <>
            `
            ${amount += item.pricePerServing};
            ${cookingTime += item.readyInMinutes};
            ${healthSc += item.healthScore};
            ${item.vegan ? veg++ : noVeg++};
            `
          </>
        );
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
            vegAccount: veg,
            noVegAccount: noVeg,
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

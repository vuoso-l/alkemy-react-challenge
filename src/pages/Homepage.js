import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MenuProduct from "../components/MenuProduct";
import SweetAlert from "../helpers/SweetAlert";

const getMenuItems = JSON.parse(localStorage.getItem("menuItems"));
const menuInitialState =
  getMenuItems === null
    ? {
        menuProducts: [],
        amount: 0,
        cookingAverage: 0,
        healthScoreAverage: 0,
      }
    : getMenuItems;

const Homepage = () => {
  const [dietCategory, setDietCategory] = useState(null);
  const [plate, setPlate] = useState([]);
  const [menu, setMenu] = useState(menuInitialState);

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menu));
  }, [menu]);

  const handleChange = (e) => {
    setDietCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDietCategory();
  };

  const getDietCategory = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a6e1e1d820c3443289f108a865a8dfb5&diet=${dietCategory}&addRecipeInformation=true`
      );
      setPlate(response.data.results);
    } catch (error) {
      SweetAlert.messageError(error);
    }
  };
  const addMenuItem = (product) => {
    const itemFind = plate.find((item) => item.id === product.id);
    const menuSize = menu.menuProducts.length + 1;
    setMenu({...menu, menuProducts: [...menu.menuProducts,itemFind], amount: menu.amount += itemFind.pricePerServing, cookingAverage: (menu.cookingAverage += itemFind.readyInMinutes) / menuSize, healthScoreAverage: (menu.healthScoreAverage += itemFind.healthScore) / menuSize});
    console.log(menu);
  };

  const deleteMenuItem = (id) => {
    const itemIndex = menu.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      const menuWithoutDeleteItem = menu.filter(
        (item, index) => index !== itemIndex
      );
      setMenu(menuWithoutDeleteItem);
    }
  };

  let id = "menuDietCategory";
  console.log(menu);
  return (
    <div>
      <Header />
      <h2>Menú restaurant</h2>
      <h3>Valor total: ${menu.amount}</h3>
      <h3>Tiempo promedio de preparación: {menu.cookingAverage}</h3>
      <h3>Tiempo promedio de health score: {menu.healthScoreAverage}</h3>
       {menu.menuProducts.map((item) => (
        <MenuProduct
          id={item.id}
          image={item.image}
          title={item.title}
          cuisines={item.cuisines}
          diet={item.diet}
          sourceUrl={item.sourceUrl}
          deleteMenuItem={deleteMenuItem}
        />
      ))}
      <h2>Buscador de platos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={id}>
          Elegí el tipo de plato para tu menú
          <select name={id} id={id} onChange={handleChange}>
            <option value="">Seleccioná una categoría</option>
            <option value="glutenfree">Gluten free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="lacto-vegetarian">Lacto Vegetarian</option>
            <option value="ovo-vegetarian">Ovo Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescetarian">Pescetarian</option>
            <option value="paleo">Paleo</option>
            <option value="low fodmap">Low FODMAP</option>
            <option value="whole30">Whole30</option>
          </select>
        </label>
        <input type="submit" value="Enviar"></input>
      </form>
      {plate.map((item) => {
        return (
          <>
            <MenuProduct
              id={item.id}
              image={item.image}
              title={item.title}
              cuisines={item.cuisines}
              diet={item.diet}
              sourceUrl={item.sourceUrl}
              deleteMenuItem={deleteMenuItem}
            />
            <button onClick={() => addMenuItem(item)}>Agregar</button>
          </>
        );
      })}
    </div>
  );
};

export default Homepage;

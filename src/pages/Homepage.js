import React, { useContext } from "react";
import Header from "../components/Header";
import MenuProduct from "../components/MenuProduct";
import MenuContext from "../context/MenuContext";

const Homepage = () => {
  const { menu, deleteMenuItem } = useContext(MenuContext);
  
  return (
    <div>
      <Header />
      <h2>Menú restaurant</h2>
      <h3>Valor total: ${menu.amount}</h3>
      <h3>Tiempo promedio de preparación: {menu.cookingAverage}</h3>
      <h3>Tiempo promedio de health score: {menu.healthScoreAverage}</h3>
      {menu.menuProducts.map((item) => (
        <MenuProduct
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          vegetarian={item.vegetarian}
          glutenFree={item.glutenFree}
          veryHealthy={item.veryHealthy}
          cuisines={item.cuisines}
          diets={item.diets}
          sourceUrl={item.sourceUrl}
          deleteMenuItem={deleteMenuItem}
        />
      ))}      
    </div>
  );
};

export default Homepage;


/* import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MenuProduct from "../components/MenuProduct";
import SweetAlert from "../helpers/SweetAlert";

const getMenuItems = JSON.parse(localStorage.getItem("menuItems"));
const defaultMenu = {
  menuProducts: [],
  amount: 0,
  cookingAverage: 0,
  healthScoreAverage: 0,
};
const menuInitialState = getMenuItems === null ? defaultMenu : getMenuItems;

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [plate, setPlate] = useState([]);
  const [menu, setMenu] = useState(menuInitialState);

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menu));
  }, [menu]);

  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchQuery();
  };

  const getSearchQuery = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a6e1e1d820c3443289f108a865a8dfb5&query=${searchQuery}&addRecipeInformation=true`
      );
      setPlate(response.data.results);
    } catch (error) {
      SweetAlert.messageError(error);
    }
  };
  const addMenuItem = (product) => {
    const itemFind = plate.find((item) => item.id === product.id);
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
    } else {
      alert("Ya tenés 4 productos, no podés agregar más");
    }
  };

  const deleteMenuItem = (id) => {
    const itemIndex = menu.menuProducts.findIndex((item) => item.id === id);
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
  };

  let idQuery = "menuSearchQuery";

  return (
    <div>
      <Header />
      <h2>Menú restaurant</h2>
      <h3>Valor total: ${menu.amount}</h3>
      <h3>Tiempo promedio de preparación: {menu.cookingAverage}</h3>
      <h3>Tiempo promedio de health score: {menu.healthScoreAverage}</h3>
      {menu.menuProducts.map((item) => (
        <MenuProduct
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          vegetarian={item.vegetarian}
          glutenFree={item.glutenFree}
          veryHealthy={item.veryHealthy}
          cuisines={item.cuisines}
          diets={item.diets}
          sourceUrl={item.sourceUrl}
          deleteMenuItem={deleteMenuItem}
        />
      ))}
      <h2>Buscador de platos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={idQuery}>
          Buscá tu menú por palabra clave
          <input
            type="text"
            name={idQuery}
            id={idQuery}
            onChange={handleChangeQuery}
          ></input>
        </label>
        <input type="submit" value="Enviar"></input>
      </form>
      {plate.map((item) => {
        return (
          <>
            <MenuProduct
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              vegetarian={item.vegetarian}
              glutenFree={item.glutenFree}
              veryHealthy={item.veryHealthy}
              cuisines={item.cuisines}
              diets={item.diets}
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
 */
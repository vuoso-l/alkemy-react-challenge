import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishSearcher from "../components/DishSearcher";

const Homepage = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <a href="#menu">Menú</a>
        </li>
        <li>
          <a href="#searcher">Buscador de platos</a>
        </li>
      </ul>
      <section id="menu">
        <Menu />
      </section>
      <section id="searcher">
        <DishSearcher />
      </section>
    </div>
  );
};

export default Homepage;

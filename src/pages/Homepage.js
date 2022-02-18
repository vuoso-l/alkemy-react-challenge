import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishSearcher from "../components/DishSearcher";
import { MenuButton, UlHomepage } from "../components/BasicTagsStyle";
import Home from "../components/Home";
import Footer from "../components/Footer";
import DishDetails from "../components/DishDetails";
import { HomepageStyle } from "../components/HomepageStyle";

const Homepage = () => {
  return (
    <HomepageStyle>
      <Header />
      <Home />
      <UlHomepage>
        <MenuButton>
          <a href="#menu">Menú</a>
        </MenuButton>
        <MenuButton>
          <a href="#searcher">Buscador de platos</a>
        </MenuButton>
      </UlHomepage>
      <section id="menu">
        <Menu />
      </section>
      <DishDetails />
      <section id="searcher">
        <DishSearcher />
      </section>
      <Footer />
    </HomepageStyle>
  );
};

export default Homepage;

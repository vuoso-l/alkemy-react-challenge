import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishSearcher from "../components/DishSearcher";
import { GralButton, UlHomepage } from "../componentsStyle/BasicTagsStyle";
import Home from "../components/Home";
import Footer from "../components/Footer";
import DishDetails from "../components/DishDetails";
import { HomepageHeaderStyle } from "../componentsStyle/HomepageStyle";

const Homepage = () => {
  return (
    <>
      <HomepageHeaderStyle>
        <Header />
        <UlHomepage>
          <GralButton>
            <a href="#home">Home</a>
          </GralButton>
          <GralButton>
            <a href="#menu">Menú</a>
          </GralButton>
          <GralButton>
            <a href="#searcher">Buscador</a>
          </GralButton>
        </UlHomepage>
      </HomepageHeaderStyle>
      <section id="home">
        <Home />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <DishDetails />
      <section id="searcher">
        <DishSearcher />
      </section>
      <Footer />
    </>
  );
};

export default Homepage;

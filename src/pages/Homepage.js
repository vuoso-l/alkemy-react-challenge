import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import DishSearcher from "../components/DishSearcher";
import { GralButton, UlHomepage } from "../components/BasicTagsStyle";
import Home from "../components/Home";
import Footer from "../components/Footer";
import DishDetails from "../components/DishDetails";
import { HomepageStyle } from "../components/HomepageStyle";

const Homepage = () => {
  return (
    <HomepageStyle>
      <div className="header">
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
      </div>
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
    </HomepageStyle>
  );
};

export default Homepage;

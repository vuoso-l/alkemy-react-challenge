import React from "react";
import { H2Style, HomepageSection } from "./BasicTagsStyle";

const Home = () => {
  return (
    <HomepageSection>
      <H2Style>Home</H2Style>
      <p>Explicación del uso de la web</p>
      <p>
        Si querés obtener más información sobre recetas y comidas, hace{" "}
        <a
          href="https://www.foodista.com/blog/recipes-cooking"
          target="_blank"
          rel="noreferrer"
        >
          click acá
        </a>
      </p>
    </HomepageSection>
  );
};

export default Home;

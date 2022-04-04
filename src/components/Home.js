import React from "react";
import {
  H2Style,
  HomepageSection,
  ParagraphHome,
} from "../componentsStyle/BasicTagsStyle";

const Home = () => {
  return (
    <HomepageSection>
      <H2Style>Home</H2Style>
      <ParagraphHome>
        <p>
          En la siguiente sección podrás ver las opciones de menús que elegiste
          en el buscador para conformar la carta completa del restaurant. Tené
          en cuenta que podrás elegir hasta cuatro platos, de los cuales, dos
          deben ser veganos.
        </p>
        <p>
          Tené en cuenta que las palabras a utilizar en el buscador deben ser en
          inglés para que el mismo las tome.
        </p>
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
      </ParagraphHome>
    </HomepageSection>
  );
};

export default Home;

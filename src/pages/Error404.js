import React from "react";
import { H2Style } from "../componentsStyle/BasicTagsStyle";
import { NotFoundStyle } from "../componentsStyle/Error404Style";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Error404 = () => {
  return (
    <>
      <Header />
      <NotFoundStyle>
        <H2Style>Page not found</H2Style>
      </NotFoundStyle>
      <Footer />
    </>
  );
};

export default Error404;

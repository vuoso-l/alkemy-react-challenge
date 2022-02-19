import React from "react";
import { imgGithub, imgLinkedin, imgPortfolio } from "../styleAux/fontAwesoneIcon";
import { H4Style } from "../componentsStyle/BasicTagsStyle";
import { FooterStyle } from "../componentsStyle/FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <H4Style>Si querés conocerme un poco más: </H4Style>
      <a
        href="https://vuoso-l.github.io/portfolio_react/"
        target="_blank"
        rel="noreferrer"
      >
        {imgPortfolio} Portfolio
      </a>
      <a
        href="https://www.linkedin.com/in/vuoso-l/"
        target="_blank"
        rel="noreferrer"
      >
        {imgLinkedin} LinkedIn
      </a>
      <a
        href="https://github.com/vuoso-l/"
        target="_blank"
        rel="noreferrer"
      >
        {imgGithub} GitHub
      </a>
    </FooterStyle>
  );
};

export default Footer;

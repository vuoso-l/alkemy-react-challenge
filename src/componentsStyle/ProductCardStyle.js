import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const ProductCardStyle = styled.div`
  ${displayFlex("", "column", "center", "center")};
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  max-width: 100%;
  width: 100%;
  padding: 20px 0px;
  margin-top: 30px;
  box-shadow: 3px 3px 10px grey;
  border-radius: 20px;
  background: radial-gradient(${color.bgSecondary}, ${color.bgPrimary});
  div {
    ${displayFlex("flex", "column", "center", "center")};
    width: 90%;
  }
  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    div {
      width: 50%;
    }
  }
  @media ${device.laptop} {
    div {
      width: 25%;
    }
  }
  @media ${device.laptopM} {
    justify-content: space-evenly;
    div {
      width: 22%;
    }
  }
`;

import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const FooterStyle = styled.footer`
  ${displayFlex("flex", "column", "center", "center")};
  background: radial-gradient(${color.bgSecondary}, ${color.bgPrimary});
  width: 100%;
  max-width: 100%;
  padding: 20px 0px;
  border-radius: 20px;
  a {
    color: white;
    padding:  0px 5px;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

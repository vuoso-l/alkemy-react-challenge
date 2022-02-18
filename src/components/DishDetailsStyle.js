import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

export const DetailsProductContainer = styled.div`
  ${displayFlex("", "column", "center", "center")};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  width: 100%;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

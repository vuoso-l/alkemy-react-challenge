import styled from "styled-components";

import { device } from "../styleAux/deviceSize";
import { displayFlex } from "../styleAux/theme";

export const MenuProductStyle = styled.section`
  ${displayFlex("flex", "column", "center", "center")};
  width: 80%;
  height: auto;
  padding: 15px;
  margin: 15px;
  border-radius: 20px;
  background-color: white;
  .btn-group {
    ${displayFlex("flex", "row", "space-around", "center")};
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 65%;
  }
  @media ${device.tablet} {
    justify-content: space-around;
    height: 375px;
  }
  @media ${device.laptop} {
    width: 90%;
    height: 425px;
  }
`;

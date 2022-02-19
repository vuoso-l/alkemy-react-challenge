import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const HeaderStyle = styled.header`
  ${displayFlex("flex", "column", "center", "center")};  
  width: 100%;
  padding: 20px 0px;
  border-radius: 20px;
  background: radial-gradient(${color.bgSecondary}, ${color.bgPrimary});
  .link {
    padding: 10px 20px
  }
  @media ${device.laptop} {
    .link {
      font-size: 24px;
    }
  }
`;

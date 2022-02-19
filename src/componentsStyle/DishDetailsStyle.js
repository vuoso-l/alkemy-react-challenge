import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const DishDetailContainer = styled.div`
  ${displayFlex("", "column", "center", "center")};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: relative;
  width: 100%;
  box-shadow: 3px 3px 10px grey;
  border-radius: 20px;
  background: radial-gradient(${color.bgSecondary}, ${color.bgPrimary});
  padding: 50px 30px;
  margin: 30px 0px;
  z-index: 999;
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid;
    border-radius: 50%;
    padding: 2px 8px;
    color: white;
    background-color: red;
    font-size: 14px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  @media ${device.mobileM} {
    width: 90%;
  }
  @media ${device.mobileM} {
    width: 80%;
  }
  @media ${device.tablet} {
    width: 70%;
    .listGroup {
      font-size: 18px;
    }
  }
  @media ${device.laptop} {
    width: 50%;
    button {
      font-size: 18px;
    }
    .listGroup {
      font-size: 20px;
    }
  }
  @media ${device.laptopM} {
    .button {
      font-size: 20px;
    }
  }
`;

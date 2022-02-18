import styled from "styled-components";
import { device } from "../styleAux/deviceSize";
import { color, displayFlex } from "../styleAux/theme";

export const HomepageSection = styled.div`
${displayFlex("flex", "column", "center", "center")};
  padding: 30px 0px;
`;

export const H2Style = styled.h2`
  text-shadow: 4px 4px 8px grey;
  font-size: 24px;
  text-align: center;
  padding-bottom: 20px;
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 36px;
  }
`;

export const H3Style = styled.h3`
  text-shadow: 2px 2px 4px grey;
  font-size: 12px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export const H4Style = styled.h4`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding-right: 10px;
  color: white;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export const ImgStyle = styled.img`
  width: 80%;
  height: auto;
  padding: 10px 0px;
  @media ${device.tablet} {
    width: 90%;
  }
`;

export const MenuProductImg = styled(ImgStyle)`
  &:hover {
    cursor: pointer;
  }
`;

export const GralButton = styled.button`
  border: 1px solid;
  border-radius: 10px;
  padding: 5px 15px;
  margin: 1px 0;
  color: white;
  background-color: #0d6efd82;
  font-size: 12px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export const AddButton = styled(GralButton)`
  background-color: ${color.addBtn};
`;

export const DeleteButton = styled(GralButton)`
  background-color: red;
`;

export const MenuButton = styled(GralButton)`
  background-color: #3d43e9;
`;

export const GralUl = styled.ul`
  border-top: 1px solid;
  border-bottom: 1px solid;
  color: black;
  font-size: 12px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export const UlHomepage = styled.ul`
  ${displayFlex("flex", "column", "center", "flex-end")};
  position: sticky;
  top: 0;
  width: 100%;
  padding: 15px 0px;
  z-index: 999;
`;

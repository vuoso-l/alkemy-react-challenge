import styled from "styled-components";
import { displayFlex } from "../styleAux/theme";

export const HomepageStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  .header {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 9999;
  }
`;

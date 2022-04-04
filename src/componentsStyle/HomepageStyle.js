import styled from "styled-components";

import { displayFlex } from "../styleAux/theme";

export const HomepageHeaderStyle = styled.div`
  ${displayFlex("flex", "column", "center", "center")};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

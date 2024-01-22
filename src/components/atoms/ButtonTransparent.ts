import styled from "styled-components";
import { ListItemHeader } from "./ListeItemHeader";

export const ButtonTransparent = styled.button`
  border: 0px;
  padding: 0px 0px;
  cursor: pointer;
  background-color: transparent;

  &:hover ${ListItemHeader} {
    opacity: 1;
    color: #ff00ff;
  }

  &:hover {
    opacity: 1;
    color: #ff00ff;
  }
`;

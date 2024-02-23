import styled from "styled-components";
import { ListItemHeader } from "./ListeItemHeader";

export const ButtonTransparent = styled.button`
  opacity: 0.8;
  border: 0px;
  padding: 0px 0px;
  cursor: pointer;
  background-color: transparent;
  font-family: inherit;

  &:hover ${ListItemHeader} {
    opacity: 1;
    color: #ba55d3;
    background-color: black;
    border: 10px solid black;
  }

  &:hover {
    opacity: 1;
    transform: scale(102%);
    position: absolute;
    z-index: 99;
    border: 3px solid black;
    border-radius: 10px;
  }
`;

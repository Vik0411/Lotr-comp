import styled from "styled-components";
import { CancelImage } from "./CancelImage";

export const ListItemWithWhiteText = styled.li`
  color: white;
  list-style-type: none;
  margin-top: 5px;
  &:hover ${CancelImage} {
    opacity: 1;
    text-decoration: none;
  }
`;

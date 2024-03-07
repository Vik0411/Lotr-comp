import styled from "styled-components";
import { CancelImage } from "./CancelImage";

export const ListItemWithWhiteText = styled.li`
  color: white;
  list-style-type: none;
  margin: 5px 200px;

  &:hover ${CancelImage} {
    opacity: 1;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 5px 10px;
  }
`;

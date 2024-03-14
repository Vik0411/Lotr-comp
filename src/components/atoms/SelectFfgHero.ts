import styled from "styled-components";

//rename component
export const SelectFfgHero = styled.select`
  color: white;
  background-color: black;
  border-radius: 12px;
  font-family: inherit;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 250px;
    font-size: 20px;
    margin-right: 0px;
    text-align: center;
  }
`;

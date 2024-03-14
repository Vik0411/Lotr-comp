import styled from "styled-components";

//make name more specific
export const Input = styled.input`
  color: white;
  background-color: transparent;
  border-radius: 15px;
  font-family: inherit;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 10px 10px;
  }
`;

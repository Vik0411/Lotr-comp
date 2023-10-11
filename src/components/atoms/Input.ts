import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  height: 30px;
  border-radius: 10px 100px / 120px;
  border-bottom: 2px solid red;
  transition: width 0.4s ease-in-out;
  left: 10px;

  :focus {
    width: 10%;
  }
`;

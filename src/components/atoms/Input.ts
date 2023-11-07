import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  height: 30px;
  border-radius: 10px 100px / 120px;
  border-bottom: 2px solid red;
  left: 10px;
`;

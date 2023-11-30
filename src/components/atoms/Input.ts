import styled from "styled-components";

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.basicWhite};
  height: 30px;
  border-radius: 10px 100px / 120px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.vanSaarRed};
  outline-color: ${({ theme }) => theme.colors.vanSaarRed};
  left: 10px;
`;

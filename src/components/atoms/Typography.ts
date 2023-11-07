import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  width: 50px;
  border-bottom: 20px solid white;
`;

export const Span = styled.header`
  align-self: flex-end;
`;

export const Subheader = styled.h2`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  color: ${({ theme }) => theme.colors.vanSaarGrey};
  border-bottom: 2px solid red;
  margin-top: 20px;
  width: 50px;
  height: 200px;
  display: flex;
`;

import styled from "styled-components";

export const Header = styled.header`
  width: 50px;
  border-bottom: 20px solid ${({ theme }) => theme.colors.basicWhite};
`;

export const Span = styled.span`
  align-self: flex-end;
`;

export const Subheader = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.colors.vanSaarRed};
  width: 50px;
  height: 200px;
  display: flex;
`;

import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 50;
  width: 50px;
  border-bottom: 20px solid white;
`;

export const Span = styled.header`
  align-self: flex-end;
`;

export const Subheader = styled.h2`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.subheader};
  border-bottom: 2px solid red;
  margin-top: 20px;
  width: 50px;
  height: 200px;
  display: flex;
`;

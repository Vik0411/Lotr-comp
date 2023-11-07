import styled from "styled-components";

export const Header = styled.header`
  width: 50px;
  border-bottom: 20px solid white;
`;

export const HeaderListAll = styled(Header)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  width: 50px;
  border-bottom: 20px solid white;
`;

export const Span = styled.span`
  align-self: flex-end;
`;

export const Subheader = styled.h2`
  border-bottom: 2px solid red;
  width: 50px;
  height: 200px;
  display: flex;
`;

export const SubheaderListAll = styled(Subheader)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  color: ${({ theme }) => theme.colors.vanSaarGrey};
  margin-top: 20px;
`;

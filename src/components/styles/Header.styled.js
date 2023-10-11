import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 50;
  width: 50px;
  border-bottom: 20px solid white;
`;

export const StyledSpan = styled.header`
  align-self: flex-end;
`;

export const StyledSubeader = styled.h2`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.subheader};
  border-bottom: 2px solid red;
  margin-top: 20px;
  width: 50px;
  height: 200px;
  display: flex;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  height: 30px;
  border-radius: 10px 100px / 120px;
  border-bottom: 2px solid red;
  transition: width 0.4s ease-in-out;
  :focus {
    width: 10%;
  }
  left: 10px;
`;

export const StyledFooter = styled.header`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

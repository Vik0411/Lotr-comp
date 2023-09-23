import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 50;
  align-text: center;
`;

export const StyledSubeader = styled.h2`
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.subheader};
  border-bottom: 2px solid red;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  border-bottom: 2px solid red;
  transition: width 0.4s ease-in-out;
  :focus {
    width: 10%;
  }
  position: relative;
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

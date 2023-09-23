import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  padding: 0 20px;
  margin: 0 auto;
  body {
    align-text:center
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: "Poppins", sans-serif;
    font-size: 1.15em;
  }
`;

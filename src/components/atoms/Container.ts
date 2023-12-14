import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  background-image: url(${require("../../images/background.jpg")});
  background-size: cover;
  border-radius: 30px;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(1fr, 3fr, 2fr);
  font-family: "Poppins", sans-serif;
  margin: 30px 30px;
`;

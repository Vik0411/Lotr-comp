import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  background-image: url(${require("../../images/background.jpg")});
  background-size: cover;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  font-family: "Poppins", sans-serif;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(to top, transparent, black),
    url(${require("../../images/lighter-bg.jpg")});
  background-size: cover;
  background-position: center;
  text-shadow: 4px 4px 3px black;
  border-radius: 30px;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(1fr, 3fr, 2fr);
  font-family: "Poppins", sans-serif;
  margin: 30px 30px;
`;

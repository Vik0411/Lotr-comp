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

export const ContainerFlex = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 30px 30px;
`;

export const ContainerFallenHeroes = styled.div`
  column-width: 200px;
  margin: 30px 30px;
`;

export const ContainerCurrentCards = styled.div`
  width: 15%;
  display: block;
  margin-bottom: 10px;
`;

export const ContainerWithWhiteText = styled.div`
  color: white;
  margin: 30px 30px;
`;

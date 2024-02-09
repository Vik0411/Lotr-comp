import styled from "styled-components";
import { ButtonShadow } from "./ButtonShadow";
import { CancelImage } from "./CancelImage";

export const Container = styled.div`
  @import url("https://fonts.cdnfonts.com/css/tolkien");
  display: flex;
  flex-direction: column;
  font-family: "Tolkien", sans-serif;
  background-image: radial-gradient(transparent, black),
    url("images/backfullb.jpeg");
  background-size: cover;
  background-position: center;
  text-shadow: 4px 4px 3px black;
  margin-top: 0px;
  box-sizing: border-box;
`;

export const ContainerFlex = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ContainerFallenHeroes = styled.div`
  column-width: 230px;
  min-height: 230px;
  margin: 65px 50px;
`;

export const ContainerBBDisplay = styled.div`
  column-width: 200px;
  margin: 20px 20px;
`;

export const ContainerCurrentCard = styled.div`
  position: relative;
  display: block;
  padding: 20px;
  overflow: hidden;
  transition: all 0.3s;

  @media (max-width: 1024px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  &:hover {
    transform: scale(105%);
  }

  &:hover ${ButtonShadow} {
    opacity: 1;
    text-decoration: none;
  }

  &:hover ${CancelImage} {
    transform: scale(90%);
    opacity: 1;
    text-decoration: none;
  }

  &:hover p {
    opacity: 1;
    text-decoration: none;
  }
`;

export const ContainerWithWhiteText = styled.div`
  color: white;
  opacity: 75%;
  text-align: center;
`;

export const ContainerFlexColumn = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  margin: 15px 15px;
  max-height: 400px;
  max-width: 400px;
  overflow: auto;
`;

export const ContainerModal = styled.div`
  box-shadow: 10px 5px 5px #452c63;
  height: 200px;
  background-image: url("images/background.jpg");
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border: 1px solid #ba55d3;
  border-radius: 10px;
`;

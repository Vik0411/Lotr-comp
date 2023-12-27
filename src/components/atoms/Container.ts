import styled from "styled-components";
import { ButtonShadow } from "./Button";
import { ButtonShadowGreen } from "../AllMightyHeroes";
import { ButtonShadowBlood, ButtonShadowYellow } from "../BoonsAndBurdens";
import { SelectFfgHero } from "./SelectFfgHero";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  background-image: radial-gradient(transparent, black),
    url(${require("../../images/lighter-bg.jpg")});
  background-size: cover;
  background-position: center;
  text-shadow: 4px 4px 3px black;
  border-radius: 30px;
  margin-top: 0px;
  box-sizing: border-box;
`;

export const ContainerFlex = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 30px 30px;

  &:hover ${ButtonShadowGreen} {
    opacity: 1;
    text-decoration: none;
  }

  &:hover ${ButtonShadowBlood} {
    opacity: 1;
    text-decoration: none;
  }

  &:hover ${ButtonShadowYellow} {
    opacity: 1;
    text-decoration: none;
  }
`;

export const ContainerFallenHeroes = styled.div`
  column-width: 200px;
  margin: 30px 30px;
`;

export const ContainerCurrentCards = styled.div`
  width: 15%;
  height: 480px;
  overflow: hidden;
  display: block;
  margin-bottom: 10px;

  &:hover ${ButtonShadow} {
    opacity: 1;
    text-decoration: none;
  }
`;

export const ContainerWithWhiteText = styled.div`
  color: white;
  opacity: 75%;
  margin: 30px 30px;
  text-align: center;
`;

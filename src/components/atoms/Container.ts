import styled from "styled-components";

export const Container = styled.div`
  width: 15vw;
  //postitioning because I want the listAllBtn to be displayed on top and up
  position: relative;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

export const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
`;

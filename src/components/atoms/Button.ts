import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  text-align: center;
  width: 75%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px;
  font-weight: 700;
  padding: 15px 80px;
  background-color: ${({ color }) => color || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    color: ${({ color }) => color || "#fff"};
    background-color: ${({ color }) => color || "#000000"};
  }
`;

export const FirstButton = styled.button`
  border-radius: 50px;
  border: none;
  text-align: center;
  width: 15vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 0px 80px;
  background-color: ${({ color }) => color || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  position: absolute;
`;

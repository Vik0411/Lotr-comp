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
  background-color: ${({ theme }) => theme.colors.subheader};
  background-color: ${({ theme }) => theme.colors.subheader};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    color: ${({ color, theme }) => color || theme.colors.firstButton};
    background-color: ${({ theme }) => theme.colors.subheader};
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
  color: ${({ color, theme }) => color || theme.colors.header};
  background-color: ${({ theme }) => theme.colors.firstButton};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  position: absolute;
`;

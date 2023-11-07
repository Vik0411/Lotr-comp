import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  width: 75%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 80px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const ListAllBtn = styled(Button)`
  width: 15vw;
  color: ${({ color, theme }) => color || theme.colors.basicBlack};
  background-color: ${({ theme }) => theme.colors.basicWhite};
  position: absolute;
`;

export const SendToCoffinBtn = styled(Button)`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.vanSaarGrey};
  background-color: ${({ theme }) => theme.colors.vanSaarGrey};

  &:hover {
    color: ${({ color, theme }) => color || theme.colors.basicWhite};
    background-color: ${({ theme }) => theme.colors.vanSaarGrey};
  }
`;

export const ListSurvivorsBtn = SendToCoffinBtn;

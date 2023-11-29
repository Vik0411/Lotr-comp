import styled from "styled-components";
import { Button } from "./atoms/Button";

function Survivors() {
  const ListSurvivorsBtn = styled(Button)`
    margin-top: 5px;
    background-color: ${({ theme }) => theme.colors.vanSaarGrey};

    &:hover {
      color: ${({ color, theme }) => color || theme.colors.basicWhite};
      background-color: ${({ theme }) => theme.colors.vanSaarGrey};
    }
  `;
  return (
    <div>
      <header>
        <ListSurvivorsBtn>List survivors</ListSurvivorsBtn>
        <div>
          <ul>{}</ul>
        </div>
      </header>
    </div>
  );
}

export default Survivors;

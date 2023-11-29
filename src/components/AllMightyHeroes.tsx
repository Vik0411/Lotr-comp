import { HeaderListAll, Span, SubheaderListAll } from "./atoms/typography";
import { Button } from "./atoms/Button";
import styled from "styled-components";

function AllMightyHeroes() {
  const ListAllBtn = styled(Button)`
    width: 15vw;
    background-color: ${({ theme }) => theme.colors.basicWhite};
    position: absolute;
  `;

  return (
    <HeaderListAll>
      <ListAllBtn>List all the mighty heroes</ListAllBtn>
      <SubheaderListAll>
        <Span>all heroes list</Span>
      </SubheaderListAll>
    </HeaderListAll>
  );
}

export default AllMightyHeroes;

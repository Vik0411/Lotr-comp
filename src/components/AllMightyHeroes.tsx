import { Header, Span, Subheader } from "./atoms/typography";
import { Button } from "./atoms/Button";
import styled from "styled-components";

const SubheaderListAll = styled(Subheader)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  color: ${({ theme }) => theme.colors.vanSaarGrey};
  margin-top: 20px;
`;

const HeaderListAll = styled(Header)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
`;

const ListAllBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.basicWhite};
  // positioning because I want the button to be displayed on top and up
  position: absolute;
`;

function AllMightyHeroes() {
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

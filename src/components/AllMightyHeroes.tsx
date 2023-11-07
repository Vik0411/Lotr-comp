import { HeaderListAll, Span, SubheaderListAll } from "./atoms/typography";
import { ListAllBtn } from "./atoms/Button";

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

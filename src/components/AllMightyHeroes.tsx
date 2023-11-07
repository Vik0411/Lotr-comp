import { Header, Subheader, Span } from "./atoms/typography";
import { ListAllBtn } from "./atoms/Button";

function AllMightyHeroes() {
  return (
    <Header>
      <ListAllBtn>List all the mighty heroes</ListAllBtn>
      <Subheader>
        <Span>all heroes list</Span>
      </Subheader>
    </Header>
  );
}

export default AllMightyHeroes;

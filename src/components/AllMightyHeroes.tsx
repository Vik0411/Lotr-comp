import { Header, Subheader, Span } from "./atoms/typography";
import { FirstButton } from "./atoms/Button";

function AllMightyHeroes() {
  return (
    <Header>
      <FirstButton>List all the mighty heroes</FirstButton>
      <Subheader>
        <Span>all heroes list</Span>
      </Subheader>
    </Header>
  );
}

export default AllMightyHeroes;

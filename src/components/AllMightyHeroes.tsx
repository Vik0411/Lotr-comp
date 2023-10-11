import { StyledHeader, StyledSubeader, StyledSpan } from "./atoms/Header";
import { FirstButton } from "./atoms/Button";

function AllMightyHeroes() {
  return (
    <StyledHeader>
      <FirstButton>List all the mighty heroes</FirstButton>
      <StyledSubeader>
        <StyledSpan>all heroes list</StyledSpan>
      </StyledSubeader>
    </StyledHeader>
  );
}

export default AllMightyHeroes;

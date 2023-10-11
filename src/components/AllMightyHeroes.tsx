import {
  StyledHeader,
  StyledSubeader,
  StyledSpan,
} from "./styles/Header.styled";
import { FirstButton } from "./styles/Button.styled";

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

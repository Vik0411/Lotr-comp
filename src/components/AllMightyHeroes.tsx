import styled from "styled-components";

function AllMightyHeroes() {
  return (
    <Wrapper>
      <header className="heading">
        <button className="btn list_all">List all the mighty heroes</button>
        <div className="all__heroes__panel">
          <h2 className="all_heroes__list">all heroes list</h2>
        </div>
      </header>
    </Wrapper>
  );
}

export default AllMightyHeroes;
const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h2 {
    margin-bottom: 0;
    font-weight: 400;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

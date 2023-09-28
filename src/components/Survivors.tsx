import styled from "styled-components";

function Survivors() {
  return (
    <Wrapper>
      <div>
        <header className="header">
          <button className="btn list_survivors">List survivors</button>
          <div className="rest__panel">
            <ul className="rest__heroes__list">{}</ul>
          </div>
        </header>
      </div>
    </Wrapper>
  );
}

export default Survivors;

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
  header {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
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

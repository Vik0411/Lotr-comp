import styled from "styled-components";

/* this is only optional html template for use
export function FallenHero(){
return (
  <li>
   <a class="hero__link" href="#23456">
       <figure class="hero__fig">
           <img src="img/test-1.jpg" alt="Test"/>
       </figure>
       <div class="hero__data">
           <h4 class="hero__name">Default name</h4>
           <p class="hero__type">Default type as Spirit</p>
       </div>
   </a>
</li>
)
}
*/

export function FallenHero({ fallenHero }: { fallenHero: string }) {
  // this component is for rendering individual fallen hero, eventually
  // also with more data, such as scenarios played, image etc.

  return (
    <Wrapper>
      <li>{fallenHero}</li>;
    </Wrapper>
  );
}

const Wrapper = styled.li`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  li {
    height: 6px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
`;

export default FallenHero;

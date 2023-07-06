import { state } from "../context";
/*
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

const FallenHero = () => {
   // const {fallenHeroes} = React.useContext(GithubContext);

    return (
        <div className='fallen'>
          {state.fallenHeroes.map((fallenHero, index) => {
            return (
              <article key ={index}>
              <div>{fallenHero}</div>
              </article>
            );
          })}
        </div>
    )}

export default FallenHero;
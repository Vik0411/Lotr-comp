export function FallenHero({ name }) {
  // this component is for rendering individual fallen hero, eventually
  // also with more data, such as scenarios played, image etc.

  console.log("x", name);
  return <li>{name}</li>;
}

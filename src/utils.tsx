export function filterHeroes(obj, allHeroes) {
  let { alive, current } = obj;
  let her = allHeroes.filter(
    (hero) => hero.alive === alive && hero.current === current
  );
  return her;
}

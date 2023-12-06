import { Hero, changedAttrs } from "./types";

export function filterHeroes(obj: changedAttrs, allHeroes: Hero[]) {
  let { alive, current } = obj;
  let her = allHeroes.filter(
    (hero) => hero.alive === alive && hero.current === current
  );
  return her;
}

import { Hero } from "../types";

export function FallenHero({ name }: Hero) {
  return (
    <li
      style={{
        color: "white",
      }}
    >
      {name}
    </li>
  );
}

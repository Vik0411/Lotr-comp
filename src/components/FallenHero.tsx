import { Hero } from "../types";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";

export function FallenHero({ name }: Hero) {
  return <ListItemWithWhiteText>{name}</ListItemWithWhiteText>;
}

import { Hero } from "../types";
import { CancelBtn } from "./atoms/Button";
import { CancelImage } from "./atoms/CancelImage";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";

export function FallenHero({ name }: Hero) {
  return (
    <ListItemWithWhiteText>
      {name}
      <CancelBtn>
        <CancelImage
          alt=""
          src={require("../images/cancel-1.png")}
        ></CancelImage>
      </CancelBtn>
    </ListItemWithWhiteText>
  );
}

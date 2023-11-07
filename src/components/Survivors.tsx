import { ListSurvivorsBtn } from "./atoms/Button";

function Survivors() {
  return (
    <div>
      <header>
        <ListSurvivorsBtn>List survivors</ListSurvivorsBtn>
        <div>
          <ul>{}</ul>
        </div>
      </header>
    </div>
  );
}

export default Survivors;

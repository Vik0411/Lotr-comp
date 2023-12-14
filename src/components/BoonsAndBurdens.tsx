import styled from "styled-components";
import { Button } from "./atoms/Button";
import { useState } from "react";

const ListSurvivorsBtn = styled(Button)`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.vanSaarGrey};

  &:hover {
    color: ${({ color, theme }) => color || theme.colors.basicWhite};
    background-color: ${({ theme }) => theme.colors.vanSaarGrey};
  }
`;

function BoonsAndBurdens() {
  const defaultBB = {
    boons: [],
    burdens: [],
  };

  const [boonsAndBurdens, setBoonsAndBurdens] = useState(defaultBB);
  const [boon, setBoon] = useState("");
  const [burden, setBurden] = useState("");

  function handleChange(e) {
    setBoon(e.target.value);
  }

  function handleChange2(e) {
    setBurden(e.target.value);
  }

  function submitBB(e) {
    e.preventDefault();
    let newBoons = [boon, ...boonsAndBurdens.boons];
    setBoonsAndBurdens({ ...boonsAndBurdens, boons: newBoons });
  }

  function submitBB2(e) {
    e.preventDefault();
    let newBurdens = [burden, ...boonsAndBurdens.burdens];
    setBoonsAndBurdens({ ...boonsAndBurdens, burdens: newBurdens });
  }

  return (
    <>
      <div>
        <h2
          style={{
            color: "white",
            justifyItems: "left",
          }}
        >
          Add Boons & Burdens
        </h2>
        <form>
          <input
            type="text"
            value={boon}
            onChange={handleChange}
            placeholder="yr boons"
          />
          <button value="sumbit boons" onClick={submitBB}>
            submit boons
          </button>
          <br />
          <input
            type="text"
            value={burden}
            onChange={handleChange2}
            placeholder="yr burdens"
          />
          <button value="sumbit burdens" onClick={submitBB2}>
            submit burdens
          </button>
        </form>
      </div>
      <div>
        <div
          style={{
            color: "white",
          }}
        >
          Boons:
        </div>
        {boonsAndBurdens.boons.map((boon) => (
          <li
            style={{
              color: "white",
            }}
          >
            {boon}
          </li>
        ))}
      </div>
      <div
        style={{
          color: "white",
        }}
      >
        Burdens:
        {boonsAndBurdens.burdens.map((burden) => (
          <li
            style={{
              color: "white",
            }}
          >
            {burden}
          </li>
        ))}
      </div>
    </>
  );
}

export default BoonsAndBurdens;

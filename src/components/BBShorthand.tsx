import { SectionHeader } from "./atoms/typography";
import { memo } from "react";
import { motion } from "framer-motion";
import { ButtonTransparent } from "./atoms/ButtonTransparent";
import { ListItemHeader } from "./atoms/ListeItemHeader";
import styled from "styled-components";
import { Boon, Burden } from "../types";

const BorBShorthand = styled.div`
  width: 160px;
  position: absolute;
  left: 160px;
  top: 5px;

  @media (max-width: 880px) {
    display: none;
  }

  @media (max-width: 1470px) {
    top: 74px;
    font-size: 15px;
  }
`;

function BBShorthand({ getBoons, burdens }) {
  return (
    <BorBShorthand>
      <motion.div initial={{ x: 1000 }} animate={{ x: 0 }}>
        <ButtonTransparent style={{ color: "grey", marginLeft: "40px" }}>
          <SectionHeader
            style={{
              color: "grey",
              fontSize: "30px",
            }}
          >
            Boons & Burdens
          </SectionHeader>
          {getBoons().map((boon: Boon) => (
            <ListItemHeader style={{ margin: "0px 0px" }} key={boon.id}>
              {boon.name}
            </ListItemHeader>
          ))}
          {burdens.map((burden: Burden) => (
            <ListItemHeader style={{ margin: "0px 0px" }} key={burden.id}>
              {burden.name}
            </ListItemHeader>
          ))}
        </ButtonTransparent>
      </motion.div>
    </BorBShorthand>
  );
}

export default memo(BBShorthand);

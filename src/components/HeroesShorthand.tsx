import { SectionHeader } from "./atoms/typography";
import { memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonTransparent } from "./atoms/ButtonTransparent";
import { ListItemHeader } from "./atoms/ListeItemHeader";
import styled from "styled-components";
import { ContainerFlex } from "./atoms/Containers";

const ContainerFlexHeader = styled(ContainerFlex)`
  width: 200px;
  position: absolute;
  left: 0px;
  top: 5px;
  flex-flow: row;

  @media (max-width: 880px) {
    display: none;
  }

  @media (max-width: 1470px) {
    top: 74px;
  }
`;
function HeroesShorthand({ current }) {
  return (
    <ContainerFlexHeader>
      <AnimatePresence>
        <motion.div
          className="heroes"
          style={{
            width: "100px",
          }}
          exit={{ opacity: 0 }}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
        >
          <ButtonTransparent
            style={{
              color: "grey",
              borderBottom: "10px",
            }}
          >
            <SectionHeader
              style={{
                color: "grey",
                borderBottom: "10px",
                fontSize: "30px",
              }}
            >
              Current Heroes
            </SectionHeader>
            {current.map((hero) => (
              <ListItemHeader style={{ margin: "0px 0px" }} key={hero.code}>
                {hero.name}
              </ListItemHeader>
            ))}
          </ButtonTransparent>
        </motion.div>
      </AnimatePresence>
    </ContainerFlexHeader>
  );
}

export default memo(HeroesShorthand);

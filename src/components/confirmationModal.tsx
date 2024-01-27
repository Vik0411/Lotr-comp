import React from "react";
import { ButtonShadow } from "./atoms/ButtonShadow";
import { modalText } from "../utils";
import { ContainerModal } from "./atoms/Containers";

function ConfirmationModal({ procede, doNotProceed }) {
  return (
    <ContainerModal>
      <p
        style={{
          color: "white",
          opacity: "1",
          margin: "40px 20px",
        }}
      >
        {modalText}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "130px",
        }}
      >
        <ButtonShadow
          style={{ opacity: 1, height: "10px" }}
          onClick={() => procede()}
        >
          Yes
        </ButtonShadow>
        <ButtonShadow
          style={{ opacity: 1, height: "10px" }}
          onClick={() => doNotProceed()}
        >
          No
        </ButtonShadow>
      </div>
    </ContainerModal>
  );
}

export default ConfirmationModal;

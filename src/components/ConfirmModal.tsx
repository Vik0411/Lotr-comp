import { ButtonShadow } from "./atoms/ButtonShadow";
import { ContainerModal } from "./atoms/Containers";

function ConfirmationModal({ proceed, doNotProceed, modalText }) {
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
        {modalText.includes("scenario") ? (
          <ButtonShadow
            style={{ opacity: 1, height: "10px" }}
            onClick={() => proceed()}
          >
            Ok
          </ButtonShadow>
        ) : (
          <>
            {" "}
            <ButtonShadow
              style={{ opacity: 1, height: "10px" }}
              onClick={() => proceed()}
            >
              Yes
            </ButtonShadow>
            <ButtonShadow
              style={{ opacity: 1, height: "10px" }}
              onClick={() => doNotProceed()}
            >
              No
            </ButtonShadow>{" "}
          </>
        )}
      </div>
    </ContainerModal>
  );
}

export default ConfirmationModal;

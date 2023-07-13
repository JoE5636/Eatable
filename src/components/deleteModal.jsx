import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "./button";

const DeleteCard = styled.div`
  position: relative;
  width: 301px;
  height: auto;
  border-radius: 20px;
  padding: 18px 16px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  z-index: 1;
`;

function DeleteModal({ onYesClick, onNoClick }) {
  return (
    <div>
      <DeleteCard>
        <h2>Are You Sure?</h2>
        <Button
          onClick={onYesClick}
          style={{
            width: "262px",
            padding: "12px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "30px",
          }}
        >
          Yes, delete it!
        </Button>
        <Button
          onClick={onNoClick}
          style={{
            backgroundColor: `${colors.yellow[500]}`,
            width: "262px",
            width: "262px",
            padding: "12px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "30px",
          }}
        >
          No, cancel
        </Button>
      </DeleteCard>
    </div>
  );
}

export default DeleteModal;

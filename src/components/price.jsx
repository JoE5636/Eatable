import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineMinusSm } from "react-icons/hi";

const ContainerPrice = styled.div`
  display: flex;
  width: 268px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: auto;
  margin-bottom: 2em;
  `;
const ContainerInputs = styled.div`
  display: flex;
  gap: 8px;
`;
const ContainerInput = styled.div`
  display: flex;
  width: 102px;
  height: 32px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--orange, #fa4a0c);
  background: var(--white, #fff);
`;

const Input = styled.input`
  width: 58px;
  border: none;
`;

function Price() {
  return (
    <ContainerPrice>
      <label style={{ fontSize: "18px" }}>Price</label>
      <ContainerInputs>
        <ContainerInput>
          <RiMoneyDollarCircleLine
            color="#8E8E8E"
            size={30}
            style={{ with: "20px", height: "20px" }}
          />
          <Input type="number" name="min" placeholder="min" />
        </ContainerInput>
        <HiOutlineMinusSm
          color="#8E8E8E"
          size={100}
          style={{ width: "16px", height: "30px" }}
        />
        <ContainerInput>
          <RiMoneyDollarCircleLine
            color="#8E8E8E"
            size={30}
            style={{ with: "20px", height: "20px" }}
          />
          <Input type="number" name="max" placeholder="max" />
        </ContainerInput>
      </ContainerInputs>
    </ContainerPrice>
  );
}

export default Price;

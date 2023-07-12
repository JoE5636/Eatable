import styled from "@emotion/styled";
import { LiaHomeSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { colors } from "../styles/colors";

const ContainerFooter = styled.footer`
  bottom: 0;
  background: white;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 120px;
  margin-right: 120px;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  size: 30;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:active {
    color: ${colors.orange[500]};
  }
`;
function Footer() {
  return (
    <ContainerFooter>
      <ContainerIcon>
        <Icon>
          <LiaHomeSolid style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon>
          <CiUser style={{ width: "30px", height: "30px" }} />
        </Icon>
      </ContainerIcon>
    </ContainerFooter>
  );
}

export default Footer;

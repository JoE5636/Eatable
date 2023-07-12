import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import foodImage from "../images/food.svg";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { colors } from "../styles/colors";

const ContainerCard = styled.div`
  display: grid;
  cursor: pointer;
  place-items: center;
  position: relative;
  width: 156px;
  height: 250px;

  &::before {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 85%;
    content: "";
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 30px 60px 0px rgba(100, 57, 57, 0.1);
  }
`;

const ContainerText = styled.div`
  width: 130px;
  height: 140px
  align-items: center;
  gap: 8px;
  margin: auto;
  z-index: 1;
  line-height: 27.65px;
`;

const ContainerTitle = styled.div`
  justify-content: center;
  color: var(--black, #333);
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const ContainerPrice = styled.div`
  color: var(--orange, #fa4a0c);
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  top: -40px;
  object-fit: cover;
  margin: 0 13px 13px;
  border-radius: 130px;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.3));
  aspect-ratio: 1/1;
`;

const IconContainer = styled.div`
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

const NavIcon = styled(NavLink)`
  border-radius: 20px;

  border: none;
  cursor: pointer;
  padding: 0.3rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    color: ${colors.orange[500]};
  }
`;

const Icon = styled.div`
  border-radius: 20px;

  border: none;
  cursor: pointer;
  padding: 0.3rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    color: ${colors.orange[500]};
  }
`;

function Food(food) {
  const price = (food.price / 100).toFixed(2);
  return (
    <ContainerCard>
      <Image src={food.picture_url} alt={foodImage} />
      <ContainerText>
        <ContainerTitle>{food.name}</ContainerTitle>
        <ContainerPrice>${price}</ContainerPrice>
        <IconContainer>
          <NavIcon to={"/product/id"}>
            <BiSolidEdit
              style={{
                color: `${colors.orange[500]}`,
                width: "16px",
                height: "16px",
              }}
            />
          </NavIcon>
          <Icon>
            <RiDeleteBin5Fill
              style={{
                color: `${colors.orange[500]}`,
                width: "16px",
                height: "16px",
              }}
            />
          </Icon>
        </IconContainer>
      </ContainerText>
    </ContainerCard>
  );
}
export default Food;

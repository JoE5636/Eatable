import styled from "@emotion/styled";
import foodImage from "../images/food.svg";

const ContainerCard = styled.div`
  display:grid;
  
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
  height: 92px;
  align-items: center;
  gap: 8px;
  margin: auto;
  z-index: 1;
  line-height:27.65px;
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
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
  aspect-ratio: 1/1;

`;
function Food(food) {

  const price = (food.price/100).toFixed(2)
  return (

      <ContainerCard>
        <Image src={food.picture_url} alt="Food image" />
        <ContainerText>
          <ContainerTitle>{food.name}</ContainerTitle>
          <ContainerPrice>${price}</ContainerPrice>
        </ContainerText>
      </ContainerCard>
  );
}
export default Food;

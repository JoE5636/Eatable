import styled from "@emotion/styled";
import Footer from "../components/footer";
import foodImage from "../images/food.svg";
import backImage from "../images/chevron-left.svg";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
`;

const Button = styled.button`
  display: flex;
  width: 310px;
  height: 70px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: var(--orange, #fa4a0c);
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

const ContainerDescription = styled.div`
  display: flex;
  width: 297px;
  flex-direction: column;
  color: var(--black, #333);
  font-size: 16px;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 91px;
  margin-top: 27px;
`;
const Price = styled.p`
  color: var(--orange, #fa4a0c);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const NameFood = styled.p`
  color: var(--black, #333);
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

const ContainerNamePrice = styled.div`
  margin: auto;
`;

const ImageFood = styled.img`
  width: 241px;
  height: 241px;
  flex-shrink: 0;
  border-radius: 241px;
  margin: auto;
  margin-bottom: 91px;
  fill: #fff;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
`;
const ImageBack = styled.img`
  margin-left: 41px;
  margin-bottom: 19px;
  cursor: pointer;

  &:hover {
    background: rgba(215, 100, 0, 0.4);
    box-shadow: 0px 0px 5px 5px rgba(215, 56, 0, 0.4);
    border-radius: 50%;
  }
`;
function FoodDetailPage() {
  return (
    <Container>
      <ImageBack src={backImage} alt="back-image" />
      <ImageFood src={foodImage} alt="image-food" />
      <ContainerNamePrice>
        <NameFood>Pasta Dish</NameFood>
        <Price>$15.45</Price>
      </ContainerNamePrice>
      <ContainerDescription>
        <h3>Description</h3>
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </p>
      </ContainerDescription>
      <Button>Go Back</Button>
      <Footer />
    </Container>
  );
}

export default FoodDetailPage;

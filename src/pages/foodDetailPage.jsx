import styled from "@emotion/styled";
import foodImage from "../images/food.svg";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { showProduct } from "../services/products-service";
import { Link, useParams } from "react-router-dom";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  background: #f6f6f9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const PathLink = styled(Link)``;

function FoodDetailPage() {
  const [product, SetProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    showProduct(id).then(SetProduct).catch(console.log);
  }, []);

  console.log(product);

  return (
    <Container>
      <ImageFood src={product.picture_url} alt="image-food" />
      <ContainerNamePrice>
        <NameFood>{product.name}</NameFood>
        <Price>{(product.price / 100).toFixed(2)}</Price>
      </ContainerNamePrice>
      <ContainerDescription>
        <h3>Description</h3>
        <p>{product.description}</p>
      </ContainerDescription>
      <PathLink
        to={"index"}
        style={{ marginBottom: "20px", textDecoration: "none" }}
      >
        <Button rounded>Go Back</Button>
      </PathLink>
    </Container>
  );
}

export default FoodDetailPage;

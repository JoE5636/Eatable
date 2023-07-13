import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Food from "../components/food";
import { getProducts } from "../services/products-service";
import { colors } from "../styles/colors";

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

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 414px;
  height: 690px;
  overflow: auto;
  justify-items: center;
  text-align: center;
`;

const PathLink = styled(Link)``;

function HomeFoodPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);

  console.log(products);

  // function handleFoodClick(event) {
  //   event.preventDefault();
  //   console.log(product.id);
  // }

  return (
    <Container>
      <h2 style={{ marginBottom: "10px" }}>Products Dashboard</h2>
      <ContainerCard>
        {products?.map((product) => {
          return (
            <Food
              // onFoodClick={handleFoodClick}
              key={product.id}
              {...product}
            ></Food>
          );
        })}
      </ContainerCard>
      <PathLink style={{ textDecoration: "none" }} to={"/create"}>
        <Button
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
          rounded
        >
          Create Product
        </Button>
      </PathLink>
    </Container>
  );
}

export default HomeFoodPage;

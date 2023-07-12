import styled from "@emotion/styled";
import Button from "../components/button";
import Food from "../components/food";
import { getProducts } from "../services/products-service";
import { useEffect, useState } from "react";
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
function HomeFoodPage() {
  // const [filters, setFilters] = useState({
  //   category: "italian",
  //   minprice: 0,
  //   maxprice: 1000000000,
  // });
  // const italian = [];
  const [products, setProducts] = useState(null);

  // function FilterFoods(category) {
  //   let foods = products?.filter((product) => product.category === category);

  //   console.log(foods);
  // }
  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);
  console.log(products);

  // function showFilter(category) {
  //   console.log("ShowFilter");
  // }

  return (
    <Container>
      <h2 style={{ marginBottom: "10px" }}>Products Dashboard</h2>
      <ContainerCard>
        {products?.map((product) => {
          return <Food key={product.id} {...product}></Food>;
        })}
      </ContainerCard>
      <Button style={{ marginTop: "10px", marginBottom: "10px" }} rounded>
        Create Product
      </Button>
    </Container>
  );
}

export default HomeFoodPage;

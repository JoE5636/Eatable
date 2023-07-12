import styled from "@emotion/styled";
import Search from "../components/search";
import NavFood from "../components/navFood";
import Price from "../components/price";
import Food from "../components/food";
import Footer from "../components/footer";
import { getProducts } from "../services/products-service";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
`;
const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  // max-height: 535px;
  width: 414px;
  height: 535px;
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

  function FilterFoods(category) {
    let foods = products?.filter((product) => product.category === category);

    console.log(foods);
  }
  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);
  console.log(products);


  function showFilter(category){

    console.log("ShowFilter")

  }

  return (
    <Container>
      <Search />
      <NavFood {...products} />
      <Price />
      <ContainerCard>
        {products?.map((product) => {
          return <Food key={product.id} {...product}></Food>;
        })}
      </ContainerCard>
      <Footer />
    </Container>
  );
}

export default HomeFoodPage;

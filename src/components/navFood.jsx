import styled from "@emotion/styled";
import { useState } from "react";
import { login } from "../services/sessions-service";

const ConteinerHeaderFood = styled.header`
  padding: 10px 0;
`;
const ConteinerNav = styled.nav`
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  margin: 1em 0;
  padding: 0;
  justify-content: space-around;
`;
const ConteinerLi = styled.li`
  display: inline-block;
  vertical-aling; top;
  margin-right: 10px;
  list-style: none;
  text-decoration: none;
  width: 352px;
`;
const NameCategory = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #9a9a9d;

  &:hover,
  active,
  focus {
    color: #fa4a0c;
    border-bottom: 4px solid;
    box-shadow: 0px 4px 4px 0px rgba(195, 63, 21, 0.1);
  }
`;

function NavFood(products) {
  const [filter, setFilter] = useState({
    category: [],
    price: [],
  });
  // console.log(Object.values(products));
  // for (let i = 0; i <= Object.values(products).length(); i++) {
  //   console.log(Object.values(products)[i].category, "hola");
  // }
  function FilterCategories() {
    let categories = [];
    Object.values(products)?.map((product) => {
      let category = Object.values(product.category);
      categories.push(category.join("").toLowerCase());
    });
    return categories;
  }
  const data = FilterCategories();
  const dataCleaner = [...new Set(data)];
  // console.log(dataCleaner);

  return (
    <ConteinerHeaderFood>
      <ConteinerNav>
        <ul className={ConteinerNav}>
          <ConteinerLi>
            {dataCleaner?.map((data) => {
              return (
                <NameCategory key={data} href="#" onClick={() => console.log(data)}>
                  {data}
                </NameCategory>
              );
            })}
          </ConteinerLi>
        </ul>
      </ConteinerNav>
    </ConteinerHeaderFood>
  );
}

export default NavFood;

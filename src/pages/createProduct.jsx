import styled from "@emotion/styled";
import { BsChevronLeft } from "react-icons/bs";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { createProduct } from "../services/products-service";
import Input from "../components/input";

const Container = styled.div`
  background-color: #f6f6f9;
  margin-left: auto;
  margin-right: auto;
  max-width: 414px;
  padding-top: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  max-width: 414px;
  background-color: #f6f6f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(NavLink)`
  border: none;
  cursor: pointer;
  padding: 0.625rem;
  background-color: #f5f5f8;
  color: ${colors.stone[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 59px;
  &:active {
    color: ${colors.orange[500]};
  }
`;

const ProductWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 504px;
`;

const ProfileCard = styled.div`
  width: 314px;
  height: 300px;
  border-radius: 20px;
  padding: 18px 16px;
  background-color: #f6f6f9;
  display: flex;
  flex-direction: column;
`;

const PathLink = styled(Link)``;

function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    picture_url: "",
  });

  const { name, price, description, category, picture_url } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    // toast("adsasd")
    setFormData({ ...formData, [name]: value });
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(formData);
    createProduct(formData);
  }
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <NavIcon to={"/index"}>
          <BsChevronLeft
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </NavIcon>
        <h3>Create Product</h3>
        <div style={{ color: "#f5f5f8" }}>.............</div>
      </Header>
      <ProductWrapper onSubmit={handlesubmit}>
        <ProfileCard>
          <Input
            id="name"
            name="name"
            value={name}
            label={"Name"}
            type="text"
            style={{ backgroundColor: "#f6f6f9" }}
            onChange={handleChange}
          ></Input>
          <Input
            id="price"
            name="price"
            value={price}
            label={"Price"}
            type="integer"
            style={{ backgroundColor: "#f6f6f9" }}
            onChange={handleChange}
          ></Input>
          <Input
            id="description"
            name="description"
            label={"description"}
            type="text"
            value={description}
            style={{ backgroundColor: "#f6f6f9" }}
            onChange={handleChange}
          ></Input>
          <Input
            id="category"
            name="category"
            label={"category"}
            type="text"
            value={category}
            style={{ backgroundColor: "#f6f6f9" }}
            onChange={handleChange}
          ></Input>
          <Input
            id="picture_url"
            name="picture_url"
            label={"Picture URL"}
            type="text"
            value={picture_url}
            style={{ backgroundColor: "#f6f6f9" }}
            onChange={handleChange}
          ></Input>
        </ProfileCard>
        {/* <PathLink style={{ textDecoration: "none" }} to={"/index"}> */}
        <Button onclick={() => navigate("/index")} rounded>
          Save
        </Button>
        {/* </PathLink> */}
      </ProductWrapper>
    </Container>
  );
}

export default CreateProduct;
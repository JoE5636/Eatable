import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BsChevronLeft } from "react-icons/bs";
// import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { createProduct } from "../services/products-service";
// import Input from "../components/input";

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

const ProductForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 504px;
`;

const ProductCard = styled.div`
  width: 314px;
  height: 300px;
  border-radius: 20px;
  padding: 18px 16px;
  background-color: #f6f6f9;
  display: flex;
  flex-direction: column;
`;

function CreateProduct() {
  function validate(values) {
    const errors = {};

    if (values.name === "") {
      errors.name = "Required";
    }

    if (values.price === "") {
      errors.price = "Required";
    } else if (values.price.length < 3) {
      errors.price =
        "price must include two decimals at the end, no decimal point";
    }

    if (values.category === "") {
      errors.email = "Required";
    }

    return errors;
  }

  const initialForm = {
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: "",
  };

  // const { name, price, description, category, picture_url } = formData;

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   console.log(value);
  //   // toast("adsasd")
  //   setFormData({ ...formData, [name]: value });
  // }

  function handleSubmit(values) {
    // event.preventDefault();
    console.log(values);
    createProduct(values);
  }

  // const navigate = useNavigate();

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
      <Formik
        initialValues={initialForm}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values, errors, touched, handleSubmit, isValid }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <ProductCard>
              <div>
                <Field
                  id="name"
                  name="name"
                  // label={"Name"}
                  // value={name}
                  type="text"
                  style={{ backgroundColor: "#f6f6f9" }}
                  // onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  className="form-error"
                  component="p"
                />
              </div>
              <div>
                <Field
                  id="price"
                  name="price"
                  // value={price}
                  // label={"Price"}
                  type="integer"
                  style={{ backgroundColor: "#f6f6f9" }}
                  // onChange={handleChange}
                />
                <ErrorMessage
                  name="price"
                  className="form-error"
                  component="p"
                />
              </div>
              <div>
                <Field
                  id="description"
                  name="description"
                  // label={"description"}
                  type="text"
                  // value={description}
                  style={{ backgroundColor: "#f6f6f9" }}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <Field
                  id="category"
                  name="category"
                  // label={"category"}
                  type="text"
                  // value={category}
                  style={{ backgroundColor: "#f6f6f9" }}
                  // onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  className="form-error"
                  component="p"
                />
              </div>
              <div>
                <Field
                  id="picture_url"
                  name="picture_url"
                  // label={"Picture URL"}
                  type="text"
                  // value={picture_url}
                  style={{ backgroundColor: "#f6f6f9" }}
                  // onChange={handleChange}
                />
              </div>
            </ProductCard>

            <Button type="submit" disabled={!isValid} rounded>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default CreateProduct;

// onclick={() => navigate("/index")

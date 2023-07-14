import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsChevronLeft } from "react-icons/bs";
// import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
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

const productForm = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "504px",
};

const ProductCard = styled.div`
  width: 314px;
  height: 300px;
  border-radius: 20px;
  padding: 18px 16px;
  background-color: #f6f6f9;
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  padding: 4px 12px;
  border: none;
  border-bottom: 1px solid ${colors.gray[500]};
  background-color: #f6f6f9;
  width: 100%;
`;

function CreateProduct() {
  function validate(values) {
    const errors = {};

    if (values.name === "") {
      errors.name = "Name is required";
    }

    if (values.price === "") {
      errors.price = "Price is required";
    } else if (values.price.length < 3) {
      errors.price =
        "price must include two decimals at the end, no decimal point";
    }

    if (values.description === "") {
      errors.description = "You must enter a description";
    }

    if (values.category === "") {
      errors.category = "You have to enter a category";
    }

    if (values.picture_url === "") {
      errors.picture_url = "You must submit a picture";
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
  const Message = () => {
    toast("Product Created!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <Formik
        initialValues={initialForm}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ values, errors, touched, handleSubmit, isValid }) => (
          <Form className="form" style={productForm} onSubmit={handleSubmit}>
            <ProductCard>
              <div>
                <div>
                  <StyledLabel htmlForfor="name">Name</StyledLabel>
                </div>
                <Field
                  id="name"
                  as={StyledInput}
                  name="name"
                  type="text"
                  style={{ backgroundColor: "#f6f6f9" }}
                />
                <ErrorMessage
                  name="name"
                  className="form-error"
                  style={{ color: "red" }}
                  component="p"
                />
              </div>
              <div>
                <div>
                  <StyledLabel htmlForfor="price">Price</StyledLabel>
                </div>
                <Field
                  id="price"
                  name="price"
                  as={StyledInput}
                  type="integer"
                  style={{ backgroundColor: "#f6f6f9" }}
                />
                <ErrorMessage
                  name="price"
                  className="form-error"
                  style={{ color: "red" }}
                  component="p"
                />
              </div>
              <div>
                <div>
                  <StyledLabel htmlForfor="description">
                    Description
                  </StyledLabel>
                </div>
                <Field
                  id="description"
                  name="description"
                  as={StyledInput}
                  type="text"
                  style={{ backgroundColor: "#f6f6f9" }}
                />
                <ErrorMessage
                  name="description"
                  className="form-error"
                  style={{ color: "red" }}
                  component="p"
                />
              </div>
              <div>
                <div>
                  <StyledLabel htmlForfor="category">Category</StyledLabel>
                </div>
                <Field
                  id="category"
                  name="category"
                  as={StyledInput}
                  type="text"
                  style={{ backgroundColor: "#f6f6f9" }}
                />
                <ErrorMessage
                  name="category"
                  className="form-error"
                  style={{ color: "red" }}
                  component="p"
                />
              </div>
              <div>
                <div>
                  <StyledLabel htmlForfor="picture_url">
                    Picture URL
                  </StyledLabel>
                </div>
                <Field
                  id="picture_url"
                  name="picture_url"
                  as={StyledInput}
                  type="text"
                  style={{ backgroundColor: "#f6f6f9" }}
                />
                <ErrorMessage
                  name="picture_url"
                  className="form-error"
                  style={{ color: "red" }}
                  component="p"
                />
              </div>
            </ProductCard>

            <Button onClick={Message} type="submit" disabled={!isValid} rounded>
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default CreateProduct;

// onclick={() => navigate("/index")}

import styled from "@emotion/styled";
// import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Food from "../components/food";
import { getProducts, deleteProduct } from "../services/products-service";
// import { colors } from "../styles/colors";
import DeleteModal from "../components/deleteModal";
import ErrorFallback from "../components/errorFalback";

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
const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(23 23 23 / 75%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const PathLink = styled(Link)``;

function HomeFoodPage() {
  const [products, setProducts] = useState(null);
  const [isOpenDelModal, setIsOpenDelModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.log);
  }, []);

  console.log(products);

  const navigate = useNavigate();

  function handleDeleteClick(id) {
    // event.preventDefault();
    setIsOpenDelModal(true);
    setProductIdToDelete(id);
    // console.log(productIdToDelete);
  }

  function handleCloseModal(event) {
    event.preventDefault();
    setIsOpenDelModal(false);
  }

  function handleDeleteProduct() {
    deleteProduct(productIdToDelete);
    setIsOpenDelModal(false);
    navigate("/index");
  }

  return (
    <Container>
      <h2 style={{ marginBottom: "10px" }}>Products Dashboard</h2>
      <ContainerCard>
        {products?.map((product) => {
          return (
            <Food
              onDeleteClick={() => handleDeleteClick(product.id)}
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {isOpenDelModal
          ? createPortal(
              <Modal>
                <DeleteModal
                  onYesClick={handleDeleteProduct}
                  onNoClick={handleCloseModal}
                ></DeleteModal>
              </Modal>,
              document.getElementById("modal-root")
            )
          : null}
      </ErrorBoundary>
    </Container>
  );
}

export default HomeFoodPage;

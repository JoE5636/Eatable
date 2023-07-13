import styled from "@emotion/styled";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeFoodPage from "./pages/homeFoodPage";
import FoodDetailPage from "./pages/foodDetailPage";
import EditProduct from "./pages/editProduct";
import CreateProduct from "./pages/createProduct";

// const Container = styled.div`
//   max-width: 414px;
//   max-height: 896px;
//   margin-left: auto;
//   margin-right: auto;
//   background: #f6f6f9;
// `;

function App() {
  // const { user } = useAuth();
  // // console.log(user);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/products" replace={true} />} />
        <Route path="products" element={<HomeFoodPage />} />
        <Route path="products/:id" element={<FoodDetailPage />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="create" element={<CreateProduct />} />
        <Route path="*" element={<Navigate to="/products" replace={true} />} />
      </Route>
    </Routes>
  );
}

export default App;

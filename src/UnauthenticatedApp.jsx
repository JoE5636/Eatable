import { Route, Routes, Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
// import { colors } from "./styles";

const Container = styled.div`
  ${
    "" /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px; */
  }
`;
export default function UnauthenticatedApp() {
  return (
    <Container>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/login" replace={true} />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Route>
      </Routes>
    </Container>
  );
}

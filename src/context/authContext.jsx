import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/products-service";
import { createUser, getUser, updateUser } from "../services/users-service";
import * as session from "../services/sessions-service";
import { tokenKey } from "../config";
// import LoadingImage from "../images/cover.png";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState({});
  const [product, setProduct] = useState({});

  function login(credentials) {
    session.login(credentials).then(setUser).catch(console.log);
  }

  function signup(userData) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function updateProfile(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }

  function logout() {
    session.logout().then(() => {
      setUser(null);
      sessionStorage.removeItem(tokenKey);
    });
  }

  const value = {
    user,
    products,
    product,
    login,
    signup,
    logout,
    updateProfile,
  };

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => console.log(error));
    getProducts()
      .then((products) => setProducts(products))
      .catch(console.log);
  }, []);

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

import { dataKey } from "../config";
import apiFetch from "./api-fetch";

export async function getProducts() {
  const data = await apiFetch("/products");
  localStorage.setItem(dataKey, JSON.stringify(data));

  // console.log(data);
  return data;
}

export async function showProduct(id) {
  const data = await apiFetch(`/products/${id}`);

  //   console.log(data);
  return data;
}

export async function createProduct(
  body = {
    name: "other pasta madness",
    price: 1000,
    category: "italian",
    description: "Delicious dish",
    picture_url:
      "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg",
  }
) {
  const data = await apiFetch("/products", { body });
  //   console.log(data);

  return data;
}

export async function updateProduct(id, body) {
  const data = await apiFetch(`/products/${id}`, { method: "PATCH", body });

  //   console.log(await data);
}

export async function deleteProduct(id = 135) {
  const data = await apiFetch(`/products/${id}`, { method: "DELETE" });

  //   console.log(data);

  return data;
}

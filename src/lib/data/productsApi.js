import { fallbackProducts } from "./mockContent";

export async function fetchProducts(category = "all") {
  try {
    let url = "https://dummyjson.com/products";
    if (category === "electronics") {
      url = "https://dummyjson.com/products/category/smartphones";
    }

    if (category === "fashion") {
      url = "https://dummyjson.com/products/category/mens-shirts";
    }

    if (category === "food") {
      url = "https://dummyjson.com/products?limit=10";
    }

    if (category === "skincare") {
      url = "https://dummyjson.com/products/category/beauty";
    }

    const res = await fetch(url);
    const data = await res.json();

    const products = data.products || [];
    return products.length > 0
      ? products.slice(0, 9)
      : fallbackProducts[category] || [];
  } catch (error) {
    console.error("API Error:", error);
    return fallbackProducts[category] || [];
  }
}

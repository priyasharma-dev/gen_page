import { schemaRegistry } from "./registry";
import { fetchProducts } from "@/lib/data/productsApi";

export async function buildSchema(resolved) {
  const { category } = resolved;

  /**
   * 1. Get base schema
   */
  const baseSchema = schemaRegistry[category] || schemaRegistry.generic;

  /**
   * 2. FETCH DATA (API LAYER)
   */
  let products = [];

  if (
    category === "electronics" ||
    category === "fashion" ||
    category === "food" ||
    category === "skincare"
  ) {
    products = await fetchProducts(category);
  }

  /**
   * 3. INJECT DATA INTO SCHEMA
   */
  return {
    category,
    layout: baseSchema.layout,
    components: baseSchema.components.map((c) => {
      if (c.type === "productGrid") {
        return {
          ...c,
          data: products, //  API injected here
        };
      }

      return c;
    }),
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "@/interfaces/IProduct";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${apiURL}/products`, {
      method: "GET",
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductById = async (idByParam: string) => {
  try {
    const allProducts = await getAllProducts();
    const product = allProducts.find(
      (product) => product.id.toString() === idByParam
    );
    if (!product) {
      throw new Error("No se encontró el producto");
    }
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};

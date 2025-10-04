"use client";

import { IProduct } from "@/interfaces/IProduct";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductById } from "@/services/products.service";
import { TitleProduct, P, H2 } from "@/components/common/Typography";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import CategoriesGrid from "@/components/common/CategoriesGrid";
import BrandInfo from "@/components/common/BrandInfo";
import Button from "@/components/common/Button";
import Image from "next/image";
import Loading from "@/components/common/Loading";
import BackButton from "@/components/common/BackButton";
// import ProductCounter from "@/components/ProductCounter";

export default function ProductDetail() {
  const { dataUser } = useAuth();
  const { addToCart } = useCart();
  const params = useParams();
  const productId = params.idProduct as string;

  const [productData, setProductData] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      setIsLoading(true);
      try {
        const product = await getProductById(productId as string);
        if (!product) return notFound();
        setProductData(product);
      } catch (err) {
        console.error("Error obteniendo el producto", err);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [productId]);

  const handleAddCart = () => {
    if (!dataUser) {
      toast.error("Debes estar logueado para agregar un producto al carrito.");
      return;
    }
    if (productData) {
      const added = addToCart(productData);
      if (added) {
        toast.success("Producto agregado al carrito de compras.");
      }
    }
  };

  let firstPart = "";
  let lastWord = "";
  if (productData) {
    const titleDivided = productData?.name.split(" ");
    lastWord = titleDivided?.pop() || "";
    firstPart = titleDivided.join(" ");
  }

  return isLoading ? (
    <div className="h-screen justify-center flex">
      <Loading />
    </div>
  ) : (
    <section className="bg-white-smoke lg:pt-20">
      <BackButton>Regresar</BackButton>
      {productData ? (
        <div className="flex flex-col gap-10 lg:flex lg:flex-row lg:gap-40 py-10 lg:py-17 px-7 lg:px-30">
          <div className="lg:w-1/2">
            <Image
              src={productData.image}
              alt={`Imagen de ${productData.name}`}
              width={1400}
              height={1400}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-10 place-items-start lg:w-1/2">
            <TitleProduct className="text-left">
              {firstPart}
              <br />
              {lastWord}
            </TitleProduct>
            <P className="text-gray-medium lg:w-130 text-left">
              {productData.description}
            </P>
            <H2>{`$ ${productData.price.toLocaleString()}`}</H2>
            <div className="flex gap-5 place-items-center lg:place-items-start">
              {/* <ProductCounter /> */}
              <Button variant="btn-primary" onClick={() => handleAddCart()}>
                AGREGAR
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <CategoriesGrid />
      <BrandInfo />
    </section>
  );
}

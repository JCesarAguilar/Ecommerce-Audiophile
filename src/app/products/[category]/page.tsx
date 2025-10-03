"use client";

import { categories, CATEGORY } from "@/helpers/categories";
import { TitleCategory } from "@/components/common/Typography";
import { getAllProducts } from "@/services/products.service";
import { useParams } from "next/navigation";
import { IProduct } from "@/interfaces/IProduct";
import { useEffect, useState } from "react";
import BrandInfo from "@/components/common/BrandInfo";
import CategoriesGrid from "@/components/common/CategoriesGrid";
import ProductCard from "@/components/category/ProductCard";
import Loading from "@/components/common/Loading";

export default function CategoryPage() {
  const { category } = useParams() as { category: string };

  const [isLoading, setIsLoading] = useState(true);

  const categoryInfo = categories.find((cat) =>
    cat.route.endsWith(`/${category}`)
  );
  const categoryTitle = categoryInfo?.title || "CATEGORÍA";

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const allProducts = await getAllProducts();
        const currentCategoryId = CATEGORY[category as keyof typeof CATEGORY];
        const filteredProducts = allProducts.filter(
          (productItem) => productItem.categoryId === currentCategoryId
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.error("Error creando orden", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return isLoading ? (
    <div className="h-screen justify-center flex">
      <Loading />
    </div>
  ) : (
    <section>
      <hr className="border-gray-dark lg:mx-30"></hr>
      <TitleCategory>{categoryTitle}</TitleCategory>
      <div className="bg-white-smoke px-7 lg:pt-20 lg:px-30 lg:pb-10">
        {products.map((productItem) => (
          <ProductCard product={productItem} key={productItem.name} />
        ))}
      </div>
      <CategoriesGrid />
      <BrandInfo />
    </section>
  );
}

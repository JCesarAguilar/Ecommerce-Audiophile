import { IProduct } from "@/interfaces/IProduct";
import { TitleProduct, P } from "../common/Typography";
import { getCategoryNameById } from "@/helpers/categories";
import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

interface CardProps {
  product: IProduct;
}

export default function ProductCard({ product }: CardProps) {
  let firstPart = "";
  let lastWord = "";

  if (product) {
    const titleDivided = product?.name.split(" ");
    lastWord = titleDivided?.pop() || "";
    firstPart = titleDivided.join(" ");
  }

  return (
    <section
      key={product.name}
      className="flex flex-col gap-10 lg:flex lg:flex-row lg:gap-40 py-15 even:lg:flex-row-reverse"
    >
      <div className="lg:w-1/2">
        <Image
          src={product.image}
          alt={`Imagen de ${product.name}`}
          width={1400}
          height={1400}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center gap-10 place-items-center lg:place-items-start lg:w-1/2">
        <TitleProduct>
          {firstPart}
          <br />
          {lastWord}
        </TitleProduct>
        <P className="text-gray-medium lg:w-130">{product.description}</P>
        <div className="flex gap-5 place-items-center lg:place-items-start">
          <Link
            href={`/products/${getCategoryNameById(product.categoryId)}/${
              product.id
            }`}
          >
            <Button variant="btn-primary">VER PRODUCTO</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

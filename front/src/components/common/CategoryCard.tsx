import { ICategory } from "@/interfaces/ICategory";
import { H2 } from "./Typography";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  category: ICategory;
}

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <div className="place-items-center h-60 lg:w-1/3 flex-col flex justify-between lg:justify-end lg:mt-20">
      <Image
        src={category.image}
        alt="categoría auriculares"
        width={160}
        height={160}
        className="lg:w-[200px] lg:h-[200px] object-contain z-10 "
      />
      <div className="flex flex-col w-full py-12 gap-2 pt-20 -mt-23 bg-gray-soft rounded-xl place-items-center lg:-mt-32 lg:pt-30">
        <H2>{category.title}</H2>
        <div className="flex gap-3 place-items-center">
          <Link
            href={category.route}
            className="text-[13px] text-gray-medium font-semibold hover:text-orange-strong"
          >
            {category.cta}
          </Link>
          <>
            <Image
              src="/images/shared/desktop/icon-arrow-right.svg"
              alt="flecha"
              width={9}
              height={3}
            />
          </>
        </div>
      </div>
    </div>
  );
}

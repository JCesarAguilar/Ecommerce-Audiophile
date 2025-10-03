import { TitleProductII } from "@/components/common/Typography";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";

export default function YX1() {
  return (
    <section className="bg-white-smoke pt-7 lg:pt-15 pb-20">
      <div className="px-7 lg:px-30 gap-7 flex flex-col lg:flex-row">
        <div className="h-auto">
          <Image
            src="/images/mobile/image-earphones-yx1.webp"
            alt="YX1 image"
            width={1000}
            height={1000}
            className="aspect-[16/9] h-full object-cover rounded-xl lg:w-[50vw]"
          />
        </div>
        <div className="bg-gray-soft rounded-xl px-6 flex flex-col gap-7 justify-center w-full aspect-[16/9] py-12 lg:place-items-start lg:w-[50vw] ">
          <TitleProductII className="lg:text-[30px] text-black-dark font-bold text-[25px] tracking-[0.1rem] pt-1 lg:pl-20">
            YX1 AUDÍFONOS
          </TitleProductII>
          <Link href="products/headphones/6" className="lg:pl-20">
            <Button variant="btn-secondary">VER PRODUCTO</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

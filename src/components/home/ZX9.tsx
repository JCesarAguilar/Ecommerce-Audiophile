import { TitleProduct, P } from "@/components/common/Typography";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";

export default function ZX9() {
  return (
    <section className="bg-white-smoke pt-20">
      <div className="bg-orange-strong mx-7 rounded-2xl flex flex-col place-items-center pt-20 pb-15 gap-10 lg:mx-30 lg:flex-row lg:justify-center lg:pb-0 lg:gap-40 lg:items-stretch lg:pt-27 relative overflow-hidden">
        <div>
          <Image
            src="/images/desktop/pattern-circles.svg"
            alt="circles"
            width={1}
            height={1}
            className="absolute w-[500px] h-[500px] pointer-events-none select-none m-auto object-cover inset-0 -translate-y-40 lg:w-[1050px] lg:h-[1050px] lg:-translate-x-72 lg:translate-y-35"
          />
          <Image
            src="/images/desktop/image-speaker-zx9.webp"
            alt="ZX9 image desktop"
            width={400}
            height={400}
            className="w-[150] lg:w-[400] lg:block lg:translate-y-3"
          />
        </div>
        <div className="flex flex-col place-items-center gap-7 lg:place-items-baseline lg:translate-y-5">
          <TitleProduct className="lg:text-[60px] lg:tracking-[0.3rem] lg:leading-18 text-white-strong font-semibold">
            ZX9<br></br>ALTAVOCES
          </TitleProduct>
          <P className="lg:text-[18px] lg:leading-8 text-gray-soft lg:w-100 px-5 lg:px-0">
            Adquiere parlantes premium que están diseñados de manera excepcional
            para ofrecer un sonido realmente extraordinario.
          </P>
          <Link href="products/headphones/1">
            <Button variant="btn-black">VER PRODUCTO</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

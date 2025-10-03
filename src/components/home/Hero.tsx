import { TitleProduct, TitleNew, P } from "@/components/common/Typography";
import Link from "next/link";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section
      className={`bg-[url("/images/mobile/image-header.webp")] lg:bg-[url("/images/desktop/image-hero.webp")] bg-cover bg-[position:center_-60px] px-9 lg:px-30 min-h-screen flex flex-col justify-center gap-2 lg:place-items-baseline lg:gap-5 place-items-center`}
    >
      <TitleNew className="text-gray-dark">NEW PRODUCT</TitleNew>
      <TitleProduct className="lg:text-[70px] lg:tracking-[0.3rem] lg:leading-18 text-white-strong">
        XX99 MARK II<br></br>HEADPHONES
      </TitleProduct>
      <P className="pb-5 lg:text-[20px] lg:leading-8 text-gray-medium lg:w-130">
        Experimenta un audio natural y realista, y una calidad de construcción
        excepcional hecho para apasionados amantes de la música.
      </P>
      <Link href="products/headphones/3">
        <Button variant="btn-primary">VER PRODUCTO</Button>
      </Link>
    </section>
  );
}

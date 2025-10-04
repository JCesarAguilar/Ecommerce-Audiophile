import { TitleProductII } from "@/components/common/Typography";
import Link from "next/link";
import Button from "../common/Button";

export default function ZX7() {
  return (
    <section className="bg-white-smoke pt-7 lg:pt-15">
      <div className="px-7 lg:px-30">
        <div
          className={`bg-[url("/images/mobile/image-speaker-zx7.webp")] lg:bg-[url("/images/desktop/image-speaker-zx7.webp")] rounded-xl bg-cover lg:px-30 min-h-[50vh] flex flex-col px-6 gap-7 lg:place-items-baseline justify-center lg:min-h-[52vh]`}
        >
          <TitleProductII className="lg:text-[30px] text-black-dark font-bold text-[25px] tracking-[0.1rem] pt-1">
            ZX7 ALTAVOCES
          </TitleProductII>
          <Link href="products/headphones/2">
            <Button variant="btn-secondary">VER PRODUCTO</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

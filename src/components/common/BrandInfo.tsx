import Image from "next/image";
import { H1, P } from "@/components/common/Typography";

export default function BrandInfo() {
  return (
    <section>
      <div className="bg-white-smoke px-7 lg:px-30 py-20 lg:pb-40">
        {/* Layout */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-24 lg:min-h-[560px]">
          {/* Columna imagen */}
          <div className="w-full lg:basis-[540px] lg:shrink-0">
            {/* Mobile */}
            <Image
              src="/images/shared/mobile/image-best-gear.webp"
              alt="Imagen artículo"
              width={330}
              height={330}
              className="rounded-xl lg:hidden w-full h-auto"
            />

            {/* Desktop */}
            <div className="hidden lg:block relative h-[560px]">
              <Image
                src="/images/shared/desktop/image-best-gear.webp"
                alt="Imagen artículo"
                fill
                className="rounded-xl object-cover"
                sizes="(min-width:1024px) 540px, 100vw"
              />
            </div>
          </div>

          {/* Columna texto */}
          <div className="w-full lg:basis-[445px] text-center lg:text-left flex flex-col gap-6">
            <H1>
              TE TRAEMOS EL <span className="text-orange-strong">MEJOR</span>{" "}
              EQUIPO DE AUDIO
            </H1>
            <P className="text-gray-medium lg:w-130">
              Ubicada en el corazón de la ciudad de Nueva York, Audiophile es la
              tienda líder en auriculares, audífonos, altavoces y accesorios de
              audio de alta gama. Contamos con una amplia sala de exhibición y
              lujosas salas de demostración disponibles para que explores y
              experimentes con nuestra variada gama de productos. Visítanos en
              nuestra tienda para conocer a las personas increíbles que hacen de
              Audiophile el mejor lugar para comprar tu equipo de audio
              portátil.
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}

import { PATHROUTES } from "@/helpers/NavItems";
import { P } from "@/components/common/Typography";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="place-items-center py-10 flex flex-col gap-5 text-center lg:block px-7 lg:px-30">
      <div className="lg:flex w-full lg:justify-between place-items-center">
        <div>
          <Logo />
        </div>
        <div className=" flex flex-col gap-3 pt-10 pb-5 lg:py-5 text-white-smoke  lg:flex-row lg:gap-7">
          <Link href={PATHROUTES.HOME} className="nav-items">
            INICIO
          </Link>
          <Link href={PATHROUTES.HEADPHONES} className="nav-items">
            AURICULARES
          </Link>
          <Link href={PATHROUTES.SPEAKERS} className="nav-items">
            ALTAVOCES
          </Link>
          <Link href={PATHROUTES.EARPHONES} className="nav-items">
            AUDÍFONOS
          </Link>
        </div>
      </div>
      <div className="place-items-center lg:flex lg:flex-row w-full lg:justify-between">
        <div>
          <P className="pb-10 text-gray-medium lg:w-180 lg:pt-5">
            Audiophile es un servicio integral para satisfacer sus necesidades
            de audio. Somos un pequeño equipo de amantes de la música y
            especialistas en sonido dedicados a ayudarle a sacar el máximo
            provecho de su audio personal. Visítenos en nuestras instalaciones
            de demostración; estamos abiertos los 7 días de la semana.
          </P>
          <P className="text-gray-medium">
            Derechos de autor © 2025. Todos los derechos reservados.
          </P>
        </div>
        <div className="flex gap-5 pt-12">
          <ImFacebook2 className="icon-footer" />
          <BsInstagram className="icon-footer" />
        </div>
      </div>
    </footer>
  );
}

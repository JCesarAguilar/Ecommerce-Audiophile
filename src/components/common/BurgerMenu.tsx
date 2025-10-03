"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { MdClose } from "react-icons/md";
import { NavItemsLeftSide, PATHROUTES } from "@/helpers/NavItems";
import Image from "next/image";
import Link from "next/link";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { dataUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="sm:hidden">
        <Image
          src="/images/shared/tablet/icon-hamburger.svg"
          alt="Menu hamburguesa"
          width={17}
          height={17}
          className="lg:hidden cursor-pointer"
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 sm:hidden z-40"></div>
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white-smoke p-6 z-50 sm:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-5"
            >
              <MdClose className="text-black-soft text-2xl cursor-pointer" />
            </button>
            <nav className="mt-28 space-y-5 text-black-soft flex flex-col">
              {NavItemsLeftSide.map((navigationItem, index) => {
                return (
                  <Link
                    key={index}
                    href={navigationItem.route}
                    className="hover:text-orange-strong"
                  >
                    {navigationItem.name}
                  </Link>
                );
              })}
              {!dataUser ? (
                <>
                  <div className="space-y-5 flex">
                    <Link
                      href={PATHROUTES.LOGIN}
                      className="hover:text-orange-strong"
                    >
                      INICIAR SESIÓN
                    </Link>
                    <span className="px-1">/</span>
                    <Link
                      href={PATHROUTES.REGISTER}
                      className="hover:text-orange-strong"
                    >
                      REGISTRARSE
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-5 flex flex-col place-items-baseline">
                    <Link
                      href={PATHROUTES.DASHBOARD}
                      className="hover:text-orange-strong"
                    >
                      MIS COMPRAS
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="hover:text-orange-strong cursor-pointer"
                    >
                      CERRAR SESIÓN
                    </button>
                  </div>
                </>
              )}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

"use client";

import { NavItemsLeftSide, PATHROUTES } from "@/helpers/NavItems";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { useAuth } from "@/context/AuthContext";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import Cart from "../cart/Cart";

export default function NavBar() {
  const { dataUser, logout } = useAuth();
  const pathname = usePathname();

  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="relative flex items-center h-[12vh] text-white-strong justify-between text-[14px] md:py-12 font-semibold lg:mx-30 mx-7">
      <div>
        <div className="hidden md:flex">
          <Logo />
        </div>
        <div>
          <BurgerMenu />
        </div>
      </div>

      <div>
        <div className="hidden space-x-7 md:flex">
          {NavItemsLeftSide.map((navigationItem) => {
            return (
              <Link
                href={navigationItem.route}
                key={navigationItem.name}
                prefetch={navigationItem.prefetch}
                className="nav-items"
              >
                {navigationItem.name}
              </Link>
            );
          })}
        </div>

        <div className="md:hidden">
          <Logo />
        </div>
      </div>

      <div className="flex items-center lg:space-x-3">
        {dataUser ? null : (
          <>
            <Link href={PATHROUTES.LOGIN}>
              <MdLogin className="icon-navBar" />
            </Link>

            <Link href={PATHROUTES.REGISTER}>
              <AiOutlineForm className="icon-navBar hidden lg:block" />
            </Link>
          </>
        )}
        {dataUser ? (
          <>
            <Link href={PATHROUTES.DASHBOARD}>
              <AiOutlineDashboard className="icon-navBar hidden lg:block" />
            </Link>
            <button
              onClick={() => setShowCart(!showCart)}
              className="cursor-pointer"
            >
              <BsCart3 className="icon-navBar" />
            </button>
            <button onClick={() => logout()}>
              <IoLogOutOutline className="hidden lg:block icon-navBar" />
            </button>
          </>
        ) : null}
      </div>
      {showCart ? pathname != "/checkout" && <Cart /> : null}
    </nav>
  );
}

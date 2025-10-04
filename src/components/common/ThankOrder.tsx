import { H1, P } from "./Typography";
import { useCart } from "@/context/CartContext";
import { AiFillCheckCircle } from "react-icons/ai";
import { useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

export default function ThankOrder() {
  const { cartItems, getProductQuantity, getTotal, getItemCount, clearCart } =
    useCart();

  const handleGoHome = () => {
    clearCart();
    window.location.href = "/";
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!cartItems || cartItems.length === 0) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black/40 z-50 px-5 lg:px-30 items-center justify-center flex">
        <div className="bg-white-smoke rounded-xl p-7 flex flex-col gap-5 lg:w-[40vw] lg:px-12 lg:py-10">
          <AiFillCheckCircle className="text-orange-strong text-[70px]" />
          <H1>
            GRACIAS <br />
            POR TU COMPRA
          </H1>
          <P className="text-gray-medium text-left">
            Pronto recibirás un email de confirmacion.
          </P>
          <div className="bg-gray-soft rounded-t-xl flex flex-col lg:flex-row lg:justify-between lg:rounded-r-xl lg:rounded-l-xl lg:mt-3 lg:mb-5 mb-2">
            <div className="lg:w-[20vw] lg:px-2">
              <div className="flex place-items-center justify-between p-5 pl-3">
                <div className="flex place-items-center gap-3">
                  <Image
                    src={cartItems[0].image}
                    alt={`Imagen de ${cartItems[0].name}`}
                    width={65}
                    height={65}
                    className="rounded-xl"
                  />
                  <div className="flex flex-col gap-1 font-bold">
                    <p className="text-black-dark text-[16px]">
                      {cartItems[0].name.split(" ").slice(0, -1).join(" ")}
                    </p>
                    <p className="text-gray-medium text-[14px]">
                      $ {cartItems[0].price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-gray-medium text-[14px] font-bold lg:pr-1">
                  x {getProductQuantity(cartItems[0].id)}
                </div>
              </div>

              {cartItems.length > 1 ? (
                <div>
                  <hr className="border-gray-medium mx-5"></hr>
                  <div className="flex justify-center">
                    <P className="text-gray-medium py-4 font-bold lg:text-center">
                      y {getItemCount() - 1} producto(s) más
                    </P>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="bg-black-medium text-white-smoke rounded-b-xl px-7 py-5 flex flex-col gap-1 lg:w-[15vw] lg:rounded-r-xl lg:rounded-l-none lg:px-8 lg:justify-center">
              <p className="text-gray-medium">TOTAL</p>
              <div className="text-[16px] text-white-smoke">
                $ {(getTotal() + 50).toLocaleString()}
              </div>
            </div>
          </div>

          <Button
            onClick={handleGoHome}
            variant="btn-primary"
            className="w-full mb-1"
          >
            IR A HOME
          </Button>
        </div>
      </div>
    </div>
  );
}

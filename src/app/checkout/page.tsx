"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/services/orders.services";
import BackButton from "@/components/common/BackButton";
import Button from "@/components/common/Button";
import CheckoutForm from "@/components/forms/CheckoutForm";
import Loading from "@/components/common/Loading";
import Image from "next/image";
import ThankOrder from "@/components/common/ThankOrder";

export default function Checkout() {
  const { dataUser } = useAuth();
  const { cartItems, getTotal, getProductQuantity, getIdItems } = useCart();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (dataUser === undefined) return;
    if (!dataUser) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [dataUser, router]);

  const handleCheckout = async () => {
    try {
      if (!dataUser?.token) {
        throw new Error("No hay token. Por favor, inicia sesión.");
      }
      await createOrder(getIdItems(), dataUser?.token);
      setMessage(true);
    } catch (err) {
      throw new Error(err as string);
    }
  };

  return isLoading ? (
    <div className="h-screen justify-center flex">
      <Loading />
    </div>
  ) : (
    <section className="bg-gray-soft pb-10">
      <>
        <BackButton className="pb-5 lg:mt-20 lg:pb-7">Regresar</BackButton>
      </>
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-30 lg:justify-between lg:items-start">
        <div className="bg-white-smoke rounded-xl px-6 py-8 lg:w-[55vw] lg:mb-20">
          <CheckoutForm />
        </div>
        <div className="bg-white-smoke rounded-xl mt-10 px-5 py-7 flex flex-col gap-5 w-full lg:w-[27vw] lg:mt-0">
          {/* Header del sumario */}
          <div className="flex justify-between">
            <div className=" text-black-dark text-[16px] font-bold">
              SUMARIO
            </div>
          </div>

          {/* Productos en el sumario */}
          <div>
            {cartItems.length === 0 ? (
              <p className="text-[15px] text-gray-medium">
                Tu carrito esta vacío
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex place-items-center py-2 justify-between"
                >
                  <div className="flex gap-5">
                    <div>
                      <Image
                        src={item.image}
                        alt={`Imagen de ${item.name}`}
                        width={65}
                        height={65}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-1 font-bold">
                      <p className="text-black-dark text-[16px]">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </p>
                      <p className="text-gray-medium text-[14px]">
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-medium text-[14px] font-bold">
                    x {getProductQuantity(item.id)}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          <div className="flex justify-between">
            <div className="text-gray-medium">SUB-TOTAL</div>
            <div className="text-black-dark text-[16px] font-bold">
              $ {getTotal().toLocaleString()}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-medium">ENVÍO</div>
            <div className="text-black-dark text-[16px] font-bold">$ 50</div>
          </div>
          <div className="flex justify-between">
            <div className="text-gray-medium">TOTAL</div>
            <div className="text-orange-strong text-[16px] font-bold">
              $ {(getTotal() + 50).toLocaleString()}
            </div>
          </div>
          <Button onClick={() => handleCheckout()} variant="btn-primary">
            CHECKOUT
          </Button>
        </div>
      </div>
      {message ? <ThankOrder /> : null}
    </section>
  );
}

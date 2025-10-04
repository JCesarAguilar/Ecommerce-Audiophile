import { useCart } from "@/context/CartContext";
import { VscTrash } from "react-icons/vsc";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../common/Button";

export default function Cart() {
  const router = useRouter();
  const { cartItems, clearCart, getItemCount, getTotal, removeFromCart } =
    useCart();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 bg-black/40 top-19 place-items-center z-50 lg:top-24 lg:place-items-end lg:px-30">
      <div className="bg-white-smoke rounded-xl mt-10 min-h-[30vh] w-[50vh] px-5 py-7 flex flex-col gap-5">
        <div className="flex justify-between">
          <div className=" text-black-dark text-[16px]">
            CARRITO ({getItemCount()})
          </div>
          <button
            onClick={clearCart}
            className="underline text-gray-medium hover:text-orange-strong cursor-pointer"
          >
            Borrar todo
          </button>
        </div>
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
                  <div className="flex flex-col gap-1">
                    <p className="text-black-dark text-[16px]">
                      {item.name.split(" ").slice(0, -1).join(" ")}
                    </p>
                    <p className="text-gray-medium text-[14px]">
                      $ {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <VscTrash className="text-2xl text-red-500 self-center lg:mr-7 mr-6 cursor-pointer" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total */}
        <div className="flex justify-between">
          <div className="text-gray-medium">TOTAL</div>
          <div className="text-black-dark text-[16px]">
            $ {getTotal().toLocaleString()}
          </div>
        </div>
        <Button
          onClick={() => router.push("/checkout")}
          variant="btn-primary"
          className="w-full disabled:opacity-70"
          disabled={cartItems.length === 0}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
}

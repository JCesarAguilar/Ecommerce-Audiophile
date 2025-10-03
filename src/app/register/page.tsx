"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/forms/RegisterForm";
import Loading from "@/components/common/Loading";

export default function RegisterPage() {
  const { dataUser } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dataUser === undefined) return;
    if (dataUser) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [dataUser, router]);

  return isLoading ? (
    <div className="h-screen justify-center flex">
      <Loading />
    </div>
  ) : (
    <section
      className={`bg-[url("/images/shared/mobile/image-register.webp")] h-[100vh] bg-cover lg:bg-[position:center_-390px]`}
    >
      <div className="flex flex-col justify-center h-full pb-7 lg:flex-row lg:pb-0">
        <div
          className={`lg:bg-[url("/images/shared/mobile/image-register.webp")] lg:bg-cover lg:w-1/2 lg:bg-[position:center_-150px]`}
        ></div>
        <div className="lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:place-items-center lg:bg-black-soft/50 lg:pt-0 pt-8">
          <div className="px-5 rounded-xl lg:min-w-xl bg-white-smoke/85 mx-7 py-7 lg:rounded">
            <h2 className="font-extrabold text-center text-black-dark text-[22px] mb-5">
              REGÍSTRATE AQUÍ
            </h2>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

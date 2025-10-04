"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/forms/LoginForm";
import Loading from "@/components/common/Loading";

export default function LoginPage() {
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
      className={`bg-[url("/images/shared/mobile/image-login.webp")] h-[100vh] bg-cover`}
    >
      <div className="flex flex-col justify-end h-full pb-7 lg:flex-row lg:pb-0">
        <div
          className={`lg:bg-[url("/images/shared/mobile/image-login.webp")] lg:bg-cover lg:w-1/2`}
        ></div>
        <div className="lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:place-items-center lg:bg-black-soft/50">
          <div className="px-5 rounded-xl lg:min-w-xl bg-white-smoke/85 mx-7 py-7 lg:rounded">
            <h2 className="font-extrabold text-center text-black-dark text-[22px] mb-5">
              TE ESTUVIMOS ESPERANDO
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

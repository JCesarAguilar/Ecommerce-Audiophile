"use client";

import { useAuth } from "@/context/AuthContext";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import OrderList from "@/components/dashboard/OrderList";
import Loading from "@/components/common/Loading";

export default function Dashboard() {
  const { dataUser } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dataUser === undefined) return;
    if (!dataUser) {
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
    <section className="bg-white-smoke py-10 lg:py-12">
      <div className="place-items-center">
        <Image
          src="/images/shared/desktop/profile.webp"
          alt="profile image"
          width={150}
          height={150}
          className="rounded-full border border-black-medium"
        />
      </div>
      <div className="place-items-center flex flex-col gap-2 pt-5">
        <div className="flex gap-1 place-items-center">
          <FaRegUser />
          <p>{dataUser?.user.name}</p>
        </div>
        <div className="flex gap-1 place-items-center">
          <IoIosPhonePortrait />
          <p> {dataUser?.user.phone}</p>
        </div>
        <div className="flex gap-1 place-items-center">
          <HiOutlineMail />
          <p>{dataUser?.user.email}</p>
        </div>
      </div>
      <div>
        <OrderList />
      </div>
    </section>
  );
}

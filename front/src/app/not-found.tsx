import BackButton from "@/components/common/BackButton";
import Image from "next/image";

export default function notFound() {
  return (
    <section className="bg-white-smoke flex flex-col h-[80vh] items-center justify-center">
      <Image
        src="/images/shared/desktop/not-found.png"
        alt="not-found image"
        width={300}
        height={300}
        className="lg:w-[500px] lg:h-auto"
      />
      <BackButton className="-mt-15">Regresar</BackButton>
    </section>
  );
}

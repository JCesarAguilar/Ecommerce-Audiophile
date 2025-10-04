import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/images/shared/desktop/logo.svg"
        alt="Imagen del logo"
        width={140}
        height={140}
      />
    </>
  );
}

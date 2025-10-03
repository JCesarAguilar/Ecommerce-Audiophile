import Hero from "@/components/home/Hero";
import CategoriesGrid from "@/components/common/CategoriesGrid";
import BrandInfo from "@/components/common/BrandInfo";
import ZX9 from "@/components/home/ZX9";
import ZX7 from "@/components/home/ZX7";
import YX1 from "@/components/home/YX1";

export default function Home() {
  return (
    <main>
      <hr className="border-gray-dark lg:mx-30"></hr>
      <Hero />
      <CategoriesGrid />
      <ZX9 />
      <ZX7 />
      <YX1 />
      <BrandInfo />
    </main>
  );
}

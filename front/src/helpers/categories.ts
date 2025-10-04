import { ICategory } from "@/interfaces/ICategory";
import { PATHROUTES } from "@/helpers/NavItems";

export enum CATEGORY {
  headphones = 1,
  speakers = 2,
  earphones = 3,
}

export const categories: ICategory[] = [
  {
    image: "/images/shared/desktop/image-category-thumbnail-headphones.webp",
    title: "AURICULARES",
    cta: "TIENDA",
    route: PATHROUTES.HEADPHONES,
  },
  {
    image: "/images/shared/desktop/image-category-thumbnail-speakers.webp",
    title: "ALTAVOCES",
    cta: "TIENDA",
    route: PATHROUTES.SPEAKERS,
  },
  {
    image: "/images/shared/desktop/image-category-thumbnail-earphones.webp",
    title: "AUDÍFONOS",
    cta: "TIENDA",
    route: PATHROUTES.EARPHONES,
  },
];

export function getCategoryNameById(id: number): string | undefined {
  return Object.keys(CATEGORY).find(
    (key) => CATEGORY[key as keyof typeof CATEGORY] === id
  );
}

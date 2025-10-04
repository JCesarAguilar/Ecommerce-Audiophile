import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "ZX9 Altavoz",
    price: 4500,
    description:
      "Actualiza tu sistema de sonido con el nuevo altavoz activo ZX9. Es un sistema de altavoces de estantería que ofrece conectividad verdaderamente inalámbrica, creando nuevas posibilidades para configuraciones de audio más agradables y prácticas.",
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1757345686/image-product_bscb1c.jpg",
    categoryId: 2,
    stock: 15,
  },

  {
    name: "ZX7 Altavoz",
    price: 3500,
    description:
      "Transmite sonido de alta calidad de forma inalámbrica con mínima o ninguna pérdida. El altavoz ZX7 utiliza componentes de alta gama para audiófilos, lo que lo convierte en el altavoz autoamplificado de gama alta para uso doméstico o en estudio.",
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1757345675/image-product_kx7vuy.jpg",
    categoryId: 2,
    stock: 12,
  },

  {
    name: "XX99 Mark II Auriculares",
    price: 2999,
    description:
      "Los nuevos auriculares XX99 Mark II son la cumbre del audio impecable. Redefinen tu experiencia premium con auriculares al reproducir la profundidad y precisión equilibradas del sonido con calidad de estudio.",
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1757345645/image-product_rfgfof.jpg",
    categoryId: 1,
    stock: 10,
  },

  {
    name: "XX99 Mark I Auriculares",
    price: 1750,
    description:
      "Como el estándar de oro para auriculares, el clásico XX99 Mark I ofrece una reproducción de audio detallada y precisa para audiófilos, ingenieros de mezcla y aficionados a la música en estudios y en movimiento.",
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1757345630/image-product_vdsqur.jpg",
    categoryId: 1,
    stock: 18,
  },

  {
    name: "XX59 Auriculares",
    price: 899,
    description:
      "Disfruta de tu audio prácticamente en cualquier lugar y personalízalo a tu gusto con los auriculares XX59. Estos auriculares inalámbricos, elegantes, duraderos y versátiles, son el compañero perfecto tanto en casa como fuera de ella.",
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1757345546/image-product_mmmuus.jpg",
    categoryId: 1,
    stock: 30,
  },
  {
    name: "YX1 Wireless Audífonos",
    price: 599,
    description:
      "Personaliza tu experiencia auditiva con los controladores dinámicos a medida de los nuevos auriculares inalámbricos YX1. Disfruta de un increíble sonido de alta fidelidad incluso en entornos ruidosos gracias a su cancelación activa de ruido.",
    image:
      "https://res.cloudinary.com/dajizrpyk/image/upload/v1757345657/image-product_xrgnfo.jpg",
    categoryId: 3,
    stock: 25,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};

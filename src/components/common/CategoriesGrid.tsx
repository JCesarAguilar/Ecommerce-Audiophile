import { categories } from "../../helpers/categories";
import CategoryCard from "./CategoryCard";

export default function CategoriesGrid() {
  return (
    <section className="px-9 lg:px-30 bg-white-smoke py-10 lg:flex-row lg:py-20 flex flex-col gap-5">
      {categories.map((categoryItem) => {
        return (
          <CategoryCard category={categoryItem} key={categoryItem.title} />
        );
      })}
    </section>
  );
}

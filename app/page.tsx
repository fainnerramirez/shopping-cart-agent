import { ProductCard } from "../components/ui/product-card";
import { productService } from "../services/user.service";

export default async function Home() {

  const products = await productService.getAll();

  return (
    <div className="flex justify-center items-start flex-wrap gap-4">
      {
        products.map(e => (
          <ProductCard key={e.id} {...e} />
        ))
      }
    </div>
  );
}

import { Product } from "../interfaces/product.interface";
import { api } from "../lib/fetcher";

export const productService = {
    getAll() {
        return api<Product[]>("/products");
    },
    getById(id: number) {
        return api<Product>(`/Product/${id}`)
    }
}
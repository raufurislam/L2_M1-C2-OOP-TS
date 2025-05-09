import { Product } from "./models/Product";

const sampleProduct = new Product(1, "product-1", 20, 50);

console.log(sampleProduct.getDetails());

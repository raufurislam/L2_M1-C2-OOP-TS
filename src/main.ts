import { Product } from "./models/Product";

const sampleProduct = new Product(1, "demo product", 30, 50);

console.log(sampleProduct.getDetails());

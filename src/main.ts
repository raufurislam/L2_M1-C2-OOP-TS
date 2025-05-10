import { DigitalProduct } from "./models/DigitalProduct";
import { Product } from "./models/Product";

const sampleProduct = new Product(1, "Demo Product", 20, 50, 100);

console.log(sampleProduct.getDetails());
// console.log(sampleProduct.getStockValue());
// console.log(sampleProduct.getDownloadInfo());
console.log(sampleProduct.sell(210));
console.log(sampleProduct.getDetails());

import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/Product";

// const sampleProduct = new DigitalProduct(1, "Demo Product", 20, 50, 100);
const sampleProduct = new Product(1, "Demo Product", 20, 50);
const sampleProduct1 = new PhysicalProduct(1, "Demo Product", 20, 50);
// const sampleProduct = new Product(1, "Demo Product", 20, 50);

// console.log(sampleProduct.getDetails());
// console.log(sampleProduct.getStockValue());
// console.log(sampleProduct.getDownloadInfo());
// console.log(sampleProduct.sell(210));
// console.log(sampleProduct.getDetails());

console.log(sampleProduct.getDetails());
console.log(sampleProduct.getStockValue());
console.log(sampleProduct1.getStockValue());

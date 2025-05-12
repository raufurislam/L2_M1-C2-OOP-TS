import { Purchasable } from "../interfaces/PolymorphismInterface";
import { Product } from "./Product";

export class PhysicalProduct extends Product implements Purchasable {
  getStockValue(): number {
    return this.price;
  }
}

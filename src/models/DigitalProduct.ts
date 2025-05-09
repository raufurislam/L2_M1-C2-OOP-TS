import { Product } from "./Product";

export class DigitalProduct extends Product {
  //   downloadSizeInMB: number;
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSizeInMB: number
  ) {
    super(id, name, price, quantity);
    // this.downloadSizeInMB = downloadSizeInMB;
  }
  getDownloadInfo() {
    return `${this.name} is downloading... Size: ${this.downloadSizeInMB}`;
  }
}

export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getDetails() {
    return `Product ${this.name} -$${this.price} stock: ${this.quantity}`;
  }

  getStockValue() {
    return this.price * this.quantity;
  }
}

// dry - do not repeat yourself
// kis - keep it simple
// solid - single...

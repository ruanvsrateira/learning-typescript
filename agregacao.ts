/*
    a relação de agregação acontece quando um precisa do outro para realizar sua
    principal função, mas pode funcionar sem.

    como por exemplo a relação entre o carro e a roda que é a agregação.
*/

export class Cart {
  private readonly produtos: Product[] = [];

  pushProduct(...products: Product[]) {
    for (const product of products) {
      this.produtos.push(product);
    }
  }

  showProducts() {
    console.log(this.produtos);
  }

  showQuantity() {
    console.log(this.produtos.length);
  }

  showTotal() {
    const total = this.produtos.reduce(
      (soma, produto) => (soma += produto.preco),
      0
    );

    console.log("TOTAL => " + total);
  }
}

export class Product {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Product("Camiseta", 49.9);
const produto2 = new Product("Carteira", 59.9);

const cart = new Cart();

cart.pushProduct(produto1, produto2);
cart.showProducts();
cart.showTotal();
cart.showQuantity();

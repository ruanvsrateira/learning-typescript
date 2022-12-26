export class Pessoa<T, U> {
  constructor(public name: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(valor: T): T {
    this.elementos[this.contador] = valor;
    this.contador++;
    return valor;
  }

  pop(): T | void {
    if (this.estaVazio()) {
      console.log("A pilha está vazia !");
    } else {
      this.contador--;
      const elemento = this.elementos[this.contador];
      delete this.elementos[this.contador];

      return elemento;
    }
  }

  estaVazio(): boolean {
    return this.contador < 1;
  }

  mostrarPilha(): void {
    console.log(this.elementos);
  }
}

const pilhaDeLivros = new Pilha<string>();

pilhaDeLivros.push("livro 1");
pilhaDeLivros.push("livro 2");
pilhaDeLivros.pop();
pilhaDeLivros.pop();
pilhaDeLivros.pop();
pilhaDeLivros.mostrarPilha();

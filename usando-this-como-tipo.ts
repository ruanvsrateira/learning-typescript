export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += this.numero;
    return this;
  }

  sub(n: number): this {
    this.numero -= this.numero;
    return this;
  }

  div(n: number): this {
    this.numero /= this.numero;
    return this;
  }

  mult(n: number): this {
    this.numero *= this.numero;
    return this;
  }
}

/* Retornando this nas funções consigo chamar varios metodos em cadeia */
const calculadora = new Calculadora(10);

/* chamando varios métodos em cadeis devido ao retorno do this */
calculadora.add(5).mult(2).sub(5);
console.log(calculadora);

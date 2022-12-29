/*
  A função dos decorators na classe, é que antes deles instanciarem a classe eles realizando
  uma função extra, algo que com uma classe somente não funcionaria.
*/

export class Animal {
  constructor(public cor: string) {}
}

export class Cor {
  constructor() {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(args);
      this.cor = "Corzinha top";
    }
  };
}

const AnimalDecorator = decorator(Animal);

const animal = new AnimalDecorator("amarelo");

console.log(animal.cor);

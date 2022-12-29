export class SerVivo {
  constructor(public respira: boolean, public idade: number) {}
}

/* Definindo uma classe filha para ser vivo, que é o ser humano que possui atributo extra que é nome */
export class SerHumano extends SerVivo {
  constructor(respira: boolean, idade: number, public nome: string) {
    super(respira, idade);
  }

  getNome(): string {
    return this.nome;
  }
}

/* extends no Generic, indica que no máximo vai ser aquilo */
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = "fellas";
    }
  };
}

const decoratorSerVivo = decorator(SerHumano);

const serhumano = new decoratorSerVivo(true, 12, "RUan");

console.log(serhumano);

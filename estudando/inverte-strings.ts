@inverteStrings
export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private nomeCompleto: string
  ) {}
}

function inverteStrings<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    nome: string;
    sobrenome: string;
    nomeCompleto: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = args[0].split("").reverse().join("");
      this.sobrenome = args[1].split("").reverse().join("");
      this.nomeCompleto = args[2].split("").reverse().join("");
    }
  };
}

const pessoa = new Pessoa("ruan", "rateira", "ruan rateira");

console.log(pessoa);

/*
    A interface é um contrato para a classe implementar todos os métodos e atributos,
    indicados no tipo igualmente ao type alias
*/

interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

// na classe pode ser implementado varios tipos ou interfaces diferente das classes abstratas
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Ruan", "Victor");

console.log(pessoa.nomeCompleto());

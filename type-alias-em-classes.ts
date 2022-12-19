/*
    O tipo é um contrato para a classe implementar todos os métodos e atributos,
    indicados no tipo
*/

type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

// na classe pode ser implementado varios tipos ou interfaces diferente das classes abstratas
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}

const pessoa = new Pessoa("Ruan", "Victor");

console.log(pessoa.nomeCompleto());
